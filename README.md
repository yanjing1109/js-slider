# js-slider
原生JS焦点图切换

具体思路：
一、页面加载、获取整个容器、所有放数字索引的li及放图片列表的ul、定义放定时器的变量、存放当前索引的变量index
二、添加定时器，每隔2秒钟index递增一次、调用一次切换图片函数
提示:
1、 index不能一直无限制的递增下去，需做判断
2、调用切换图片函数时需将递增之后的index作为参数传过去
三、定义图片切换函数
提示:
  1.遍历所有放数字索引的li，将每个li上的类去掉。
  2.根据传递过来的index值找到对应的li给它添加类设为当前高亮显示。
  3. 根据传递过来的index值计算放图片的ul的top值
  4. 改变index的值，让其等于传递过来的参数值
注意：放图片的ul的top值=-index*单张图片的高度（所有图片必须等高）
四、鼠标划过整个容器时，图片停止切换，离开继续
提示:
1.  鼠标滑过整个容器时清除定时器
2.  鼠标离开时继续执行定时器，切换至下一张图片
五、遍历所有放数字的li，且给他们添加索引、鼠标滑过时切换至对应的图片。
        鼠标滑过时调用图片切换函数，将滑过的li的索引传过去。

