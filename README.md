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

我们来体验一下git本文件添加到git仓库的操作：<br>

**假定我们本地有个cp-cra-eject的文件**

+ 进入当前文件cp-cra-eject中： git init
+ git st执行之后我们会看到被修改的文件
+ git commit -m "text"
+ 此时我们就需要在远程git上创建‘cp-cra-eject’的仓库
    ![image](https://github.com/cunde/cp-cra-eject/blob/master/mdimg/744F2EEE-E158-4B8D-B696-3835A2C379BC.png)

+ 之后我们就需要执行git remote add <name> <url>

    ```
    $ git remote add origin <仓库的git地址了>
    ```

+ git pull origin master
+ git push -u origin master 一般我们执行此命令时会出现错误：
    ![image](https://github.com/cunde/cp-cra-eject/blob/master/mdimg/98409394-8725-40AE-A189-BF09ACFFE2E8.png)

+ 处理以上的错误我们执行 git push -f origin master 强制操作

以上操作我们就已经把当前项目提交到git仓库中了。**但是我们再次修改时候直接执行push 操作的时候会有提示操作。我们直接按git提示就可以搞定了**<br>

#### 梳理执行过程：

```
    git init
    git add .
    git commit -m 'text'
    创建git仓库
    git pull origin master
    git remote add origin <git url>
    git push -f origin master
    git push --set-upstream origin master || git push -u origin master
```
:pray: 以上操作应该可以满足你的需求了
