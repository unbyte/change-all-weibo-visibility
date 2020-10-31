# 批量更改微博可见状态

## 使用步骤

1. 登陆网页版微博并进入自己的主页（一般为 `https://weibo.com/xxxxxx/profile`）
2. 打开浏览器的开发者工具（快捷键一般为F12），并切换到`Console`工具，将 https://github.com/unbyte/change-all-weibo-visibility/blob/master/script.js 的所有内容复制粘贴，然后回车
3. 仔细阅读 https://github.com/unbyte/change-all-weibo-visibility/blob/master/script.js 开头的文字，并根据需要在`Console`中调用函数

## 示例

> `changeAllWeiboVisibility(目标可见状态, 原本的可见状态)`
> 
> 省略原本的可见状态则把所有的微博都转换成目标可见状态。

- 想要将所有微博设为仅自己可见 `changeAllWeiboVisibility('private')`
- 想要将所有微博设为仅粉丝可见 `changeAllWeiboVisibility('fan')`
- 想要将所有好友可见微博设为公开 `changeAllWeiboVisibility('public', 'friend')`


## 开源协议

MIT License.
