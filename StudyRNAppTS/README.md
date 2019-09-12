#React Native勉強用

https://note.mu/onota0318

#準備
https://facebook.github.io/react-native/docs/getting-started
React Native CLI Quickstart

#起動
## iOS

```
cd /path/to/StudyRNAppTS
react-native run-ios
```

## Android
※事前にemulator or 実機接続の必要あり

```
cd /path/to/StudyRNAppTS
emulator -list-avds
emulator @<<-list-avdsで出てきたdevice id>> &

react-native run-android
```