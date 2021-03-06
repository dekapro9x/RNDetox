Các bước cài đặt Detox:
key search add lib:

# //Detox add config:

Yêu cầu version:

# NodeJS : 16.x.x

# Java : 8.x.x

Bước 1: Cài đặt CLI:

# npm install -g detox-cli

Bước 2: Cài đặt cấu hình:

# npm install detox --save-dev

# npm install detox --save-dev --no-package-lock

Bước 3: Cài đặt Mocha hoặc Jest để tích hợp và chạy e2e: (Chỉ có phần tạo e2e và tự động tạo file json là khác nhau)
Cài đặt Jest : https://wix.github.io/Detox/docs/guide/jest
**********************************\*\*\***********************************DETOX WITH JEST**********************************************\*\*\*\***********************************************
                                                        https://docs.nativescript.org/plugins/detox.html#running-tests
# npm install -D jest
# detox init -r jest

Xóa hết file cấu hình cũ đi bao gồm e2e và .detoxrc.json rồi chạy lệnh

# detox init -r jest

KQ:
detox[13020] INFO:  [init.js] Created a file at path: e2e\config.json
detox[13020] INFO:  [init.js] Created a file at path: e2e\environment.js  
detox[13020] INFO:  [init.js] Created a file at path: e2e\firstTest.e2e.js
detox[13020] INFO:  [init.js] Created a file at path: .detoxrc.json  

Thêm 2 cấu hình : .detoxrc.json

# "binaryPath": "platforms/android/app/build/outputs/apk/debug/app-debug.apk",

# "build": "ns build android --detox"

Thêm cài đặt cấu hình trong :main/res/values

Chạy lệnh detox build -c android

**********************************\*\*\***********************************DETOX WITH JEST**********************************************\*\*\*\***********************************************
**********************************\*\*\***********************************DETOX WITH MOCHA**********************************************\*\*\***********************************************
Cài đặt Mocha:

# npm install mocha --save-dev --no-package-lock

# detox init -r mocha

Lần lượt cấu hình các file theo hướng dẫn sau: https://wix.github.io/Detox/docs/introduction/getting-started
Cấu hình file .detoxrc.json chạy lệnh:

# .detoxrc.json

Lưu ý: Hướng dẫn cài đặt duy nhất có 1 lệnh

# .detoxrc.json là tạo ra file định nghĩa cấu trúc file .detoxrc.json để Detox dựa vào đó chạy duyệt qua 1 lượt cấu trúc.

.detoxrc.js
.detoxrc.json
.detoxrc
detox.config.js
detox.config.json
package.json ("detox" section)
Cấu trúc detox sẽ chạy qua lần lượt qua các file này. Vì vậy hãy kiểm tra lại 1 lượt, nếu đã có 1 trong các cấu hình đó thì là Done. (Mình dùng .detoxrc.json nhé)
**********************************\*\*\***********************************DETOX WITH MOCHA**********************************************\*\*\***********************************************

Bước 4: Cấu hình Dependency: https://wix.github.io/Detox/docs/introduction/android/
4.1: Kiểm tra
android/build.gradle chứa cấu hình bao gồm:

# google()

# url "$rootDir/../node_modules/detox/Detox-android"

                                             android/app/build.gradle chứa cấu hình bao gồm:

# androidTestImplementation('com.wix:detox:+')

# testBuildType System.getProperty('testBuildType', 'debug') // This will later be used to control the test apk build type

# testInstrumentationRunner 'androidx.test.runner.AndroidJUnitRunner'

Bước 5: Thêm cấu hình Kotlin:
android/build.gradle chứa cấu hình bao gồm:

# kotlinVersion = '1.3.0'

# classpath "org.jetbrains.kotlin:kotlin-gradle-plugin:$kotlinVersion"

Bước 6: Cấu hình HTTPS mã hóa cho dữ liệu duyệt web:

# cleartextTrafficPermitted="true"

# android:networkSecurityConfig="@xml/network_security_config"

Bước 7: Cấu hình file Detox-Test Class native:

Cấu trúc android/app/src/androidTest/java/com/[your.package]/DetoxTest.java
=> android/app/src/androidTest/java/com/rn_064detox/DetoxTest.java
Copy đoạn mã sau:
https://github.com/wix/Detox/blob/master/examples/demo-react-native/android/app/src/androidTest/java/com/example/DetoxTest.java

Bước 8: Cấu hình quy tắc Detox ProGuard để Detox hoạt động tốt nhất trong app/build.gradle:

# minifyEnabled true

Bước 9: Build và Test:
# detox test -c android

# detox build --configuration android

# detox test --configuration android


