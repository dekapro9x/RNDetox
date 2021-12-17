Các bước cài đặt Detox:
Yêu cầu version:
# NodeJS : 16.x.x
# Java : 8.x.x
Bước 1: Cài đặt CLI
# npm install -g detox-cli
Bước 2: Cài đặt cấu hình:
# npm install detox --save-dev
# npm install detox --save-dev --no-package-lock
Bước 3: Cài đặt Mocha hoặc Jest để tích hợp và chạy e2e:
Cài đặt Jest : https://wix.github.io/Detox/docs/guide/jest
Cài đặt Mocha: 
# npm install mocha --save-dev --no-package-lock
# detox init -r mocha


Lần lượt cấu hình các file theo hướng dẫn sau: https://wix.github.io/Detox/docs/introduction/getting-started
Cấu hình các file chạy các lệnh:
# .detoxrc.json