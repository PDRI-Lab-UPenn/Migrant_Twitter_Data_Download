import json
import requests
from bs4 import BeautifulSoup
from webdriver_manager.chrome import ChromeDriverManager
from selenium import webdriver
driver = webdriver.Chrome(ChromeDriverManager().install())

def update_json_file(data, failed_data):
    with open("json_link_data.json", "w") as f:
        json.dump(data, f, indent=4)
    with open("failed_json_link_urls.json", "w") as f:
        json.dump(failed_data, f, indent=4)
        
json_link_data = {
    "year_level_folders": [],
    "month_level_folders": [],
    "json_file_urls": []
}

failed_json_link_urls = {
    "year_level_folders": [],
    "month_level_folders": []
}

try:
    with open("./Home_Page.html", "r", encoding="utf-8") as file:
        html_content = file.read()
except FileNotFoundError:
    print("Home_Page.html file not found. Exiting.")
    exit(1)

soup = BeautifulSoup(html_content, 'html.parser')
article_tags = soup.find_all("article", class_="cell-container")

# Loop through each month & add folder links
for article in article_tags:
    a_tag = article.find('a', href=True)
    if a_tag:
        href_value = a_tag['href']
        folder_link = href_value.replace("/details/", "/download/")
        json_link_data["year_level_folders"].append(folder_link)
        
update_json_file(json_link_data, failed_json_link_urls)


# Loop through each month link & add day links
for folder_link in json_link_data["year_level_folders"]:
    try:
        driver.get(folder_link)
        new_soup = BeautifulSoup(driver.page_source, 'html.parser')
        a_tags = new_soup.find_all('a', href=True)
        relevant_a_tags = [tag for tag in a_tags if tag['href'].endswith('.tar') or tag['href'].endswith('.zip')]
        if not relevant_a_tags:
            failed_json_link_urls["year_level_folders"].append(folder_link)
            continue
        for a_tag in relevant_a_tags:
            month_folder_link = f"{folder_link}/{a_tag['href']}/"
            json_link_data["month_level_folders"].append(month_folder_link)
    except Exception as e:
        print(f"An error for url {folder_link} occurred: {e}")
        failed_json_link_urls["year_level_folders"].append(folder_link)

update_json_file(json_link_data, failed_json_link_urls)
        
# Loop through each day link & add download links & sizes
update_counter = 0
for folder_link in json_link_data["month_level_folders"]:
    update_counter += 1
    if update_counter % 100 == 0:
        update_json_file(json_link_data, failed_json_link_urls)
    try:
        driver.get(folder_link)
        new_soup = BeautifulSoup(driver.page_source, 'html.parser') 
        tr_tags = new_soup.find_all('tr')
        if not tr_tags:
            failed_json_link_urls["month_level_folders"].append(folder_link)
            continue
        for index, tr_tag in enumerate(tr_tags):
            if index < 2: # Skip first two rows (headers)
                continue
            td_tags = tr_tag.find_all('td')
            href = td_tags[0].find('a', href=True)['href'] if td_tags[0].find('a', href=True) else ''
            size = td_tags[3].text
            info_block = {
                'url': href,
                'size_in_bytes': size
            }
            json_link_data["json_file_urls"].append(info_block)
    except Exception as e:
        print(f"An error for url {folder_link} occurred: {e}")
        failed_json_link_urls["month_level_folders"].append(folder_link)
            
driver.quit()

update_json_file(json_link_data, failed_json_link_urls)