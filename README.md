项目来源： [Create React App](https://github.com/facebookincubator/create-react-app).

### 浅谈GitHub初始化

出于我之前对git仓库的粗略了解。<br/>
每当我想创建个git仓库时：

+ 首先：在git上new一个新的项目
+ 其次：git clone 当前项目到本地
+ 对文件修改之后，我执行以下操作：
    + git add .
    + git commit -m '****'
    + git push

    **以上操作是针对master分支操作的**，其他分支操作，我只需要在git上进行一次merge，或者本地的git merge操作就可以了。<br>

以上操作就可以满足我们的正常git的简单操作需求了！<br>
但是我们有些时候，我们想把之前在本地已有的文件上传到git的空间。<br>
如果按照上边的操作我们感觉似乎有点笨重。所以我们还是尽情的享受一下git的CLI操作吧!<br>
