# vue-pet

## 关于
学了一些前端知识，想应用于实践，加上我本身比较喜欢小动物，所以做了这个宠物大全app。  
核心功能是展示猫狗爬宠水族等市面常见的五类宠物基本信息，以及记录自己的宠物的照片，洗澡疫苗体重记录等。但由于目前只做了前端页面，所以记录部分只有页面展示，不能记录。

## 注意：此项目为个人开发练习，不做商业用途

## 功能：
登录页面  
点击宠物类别，跳转到相应宠物品种展示页面  
从品种点击跳转到具体词条  
展示宠物百科知识  
宠物相册和成长记录（如洗澡剪毛疫苗体检等，同样只有页面展示，不能实际记录上传）  

## 技术栈
* vue2  
* vue-router  
* vue-cli  
* axios  
* element-UI  
* vant
* CSS预处理器less  

## 项目展示
页面整体  
<img src="https://github.com/hyzDUT/vue-pet/blob/master/result/page.gif" width="200px"><br/>
点进猫类和狗类图标（其实五类都可以点，偏度所限只展示两个）  
<img src="https://github.com/hyzDUT/vue-pet/blob/master/result/cat.gif" width="200px">
<img src="https://github.com/hyzDUT/vue-pet/blob/master/result/dog.gif" width="200px"><br/>   
点进宠物百科知识图标    
<img src="https://github.com/hyzDUT/vue-pet/blob/master/result/climb.gif" width="200px"><br/> 
点进宠物记录图标（因为只有前端页面，所以只有展示功能，没有实际记录功能）
<img src="https://github.com/hyzDUT/vue-pet/blob/master/result/note.gif" width="200px">
<img src="https://github.com/hyzDUT/vue-pet/blob/master/result/photo.gif" width="200px">

## 项目运行
命令行进入项目文件夹  
```
npm install
```
（初次启动）  
```
npm run serve
```
启动前端工程  
在运行npm run serve时如有10% building 2/5 modules 3 active ...lib\index.js!/路径报错，则先执行
```
$env:NODE_OPTIONS="--openssl-legacy-provider"
```
再执行
```
npm run serve
```
## 关于api接口
在项目中使用了现成的api接口，是在天行数据上申请的，https://www.tianapi.com/apiview/162 是该接口的网址。  
如果要运行需要自己注册一个账号并申请该接口，然后把src/api/index.js里的密钥改成自己账号申请的密钥即可。

## 项目布局

## 写在最后
因为还是学生，平时最多也是和同学一起开发，并没有参与过真正的企业团队开发，所以应该有很多地方做的不是很好，欢迎各位大佬们给我提一些意见。  
如果有问题，您可以在 Issues 中提问。 如果您对这个项目感兴趣，请Star支持下，谢谢！
