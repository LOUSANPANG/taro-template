[![K6kMPU.md.gif](https://s2.ax1x.com/2019/10/28/K6kMPU.md.gif)](https://imgchr.com/i/K6kMPU)

### 一、 依赖项

#### 1.1 taro taro-ui

```
"@tarojs/components": "1.3.17"

"@tarojs/taro": "1.3.17"

"prop-types": "^15.7.2"

"taro-ui": "^2.2.3"
```

#### 1.2 依赖使用

* 使用`taro-ui`的指示器代替`showLoading`
* 使用`prop-types`定义`props`类型
  
  ```
  npm install taro-ui
  npm install --save prop-types
  ```

### 二、 使用

#### 2.1 下载

将`Loading`文件夹下载到`components文件夹下`

#### 2.2 引用

```
jsx:
import Loading from '../../components/Loading/Loading'

scss:
@import '../../components/Loading/Loading.scss'
```

#### 2.3 应用

在state中定义, showLoading组件false为隐藏, true为显示

```
  constructor(props) {
      super(props)
      this.state = {
          showLoading: false
      }
  }
```

在接口中使用

```
componentWillMount() {
    this.setState({ showLoading: true })
    fetch('', {}).then(res => {
       this.setState({
            showLoading: false
        })
    }).catch(() => {
        this.setState({ showLoading: false })
    })

}
```

在render函数中使用

```
return(
    <Loading showLoading={showLoading} />
)
```

定义props

```
/**
 * showLoading 加载开关(true显示, false隐藏)
 */

Index.defaultProps = {
    showLoading: false
}
```
