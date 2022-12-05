export let showAvatar = function() {
  let avatar = $(".comment-form .el-avatar");
  let popover = $(".ant-popove");
  let positionLeft = avatar.position().left;
  let positionTop = avatar.position().top;

  window.addEventListener("scroll",function () {
    console.log("scroll positionLeft",positionLeft)
    console.log("scroll positionTop",positionTop)
    popover.css("left",positionLeft + "!important")
    popover.css("top",positionTop + "!important")
  })
}
