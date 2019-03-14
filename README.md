# wqt-admin-1.4

## [Onloon specification](http://121.40.212.124:81/liyinyufeng/onloon-specification/blob/master/font-end-specification.md)

## Project setup
```
yarn install
```

### Compiles and hot-reloads for development
```
yarn run dev
```

### Compiles and minifies for production
```
yarn run build
```


### Lints and fixes files
```
yarn run lint
```

### Coding notice
```
- 组件命名遵循 PascalCase 命名
  components/
  |- MyComponent.vue

- 非公共组件放在临近目录components文件夹内
- 共用组件才放在src/components内

- 文件目录和路由地址对应
  index/index => views/index/index.vue

- 具体文件目录结构详情见template文件夹

- 样式类名遵循小写方式，以中划线分隔
```


### Project submission
```
版本分支遵循 v- + 版本号规则

如： v-1.4.1

develop // 测试分支

master // 线上备用分支

fix-bug // 线上应急修复bug分支
```


### Test release process
```
合并版本分支至develop分支

yarn run build 打包

将dist文件夹内的所有文件打包为webadmin-test.zip

发送给发布人员，由发布人员发布并通知开发小组。

周知发布内容，修复bug号等。
```


### Production release process

```
合并版本分支至 develop 分支

yarn run build 打包

将dist文件夹内的所有文件打包为webadmin.zip

发送给发布人员，由发布人员发布并通知开发小组。

周知发布内容，修复bug号等。

线上验收通过后将代码合并至 master 分支
```
