<template>
    <div class="footer">
        <div class="container">
            <!--footer畫面左區-->
            <div class="item">
              <div class="icon">
                <img src="/img/layout/fb.png" alt="" width="100" class="fb">
              </div>
              <div>
                <div class="fbtext">
                  <p>莊傑安</p>
                </div>
              </div>
            </div>
            <div class="item">
              <div class="icon">
                <img src="/img/layout/phone.png" alt="" width="100" class="phone">
              </div>
              <div class="phonetext">
                  <p>0978591653</p>
                </div>
            </div>
            <div class="item">
              <div class="icon">
                <img src="/img/layout/mail.png" alt="" width="100" class="mail">
              </div>
              <div class="mailtext">
                  <p>jyean8536@gmail.com</p>
                </div>
            </div>
            <p class="link-right">段落1</p>
            <!--footer畫面右區-->
            <div class="col-sm-12 col-md-5 m-3">
              <div class="endtext">
                  <p>Github</p>
                  <div class="code">
                      <a href="https://github.com/JyeAn/Paper_code">碩論</a>
                      <br />
                      <a href="">國科會計畫</a>
                      <br />
                      <a href="https://github.com/JyeAn/chgh">產學合作</a>
                </div>
            </div>
          </div>
        </div>
        <p class="end">©2019 by JyeAn</p>

    </div>
</template>

<script>
export default {
  name: 'Footer',
  props: {
    msg: String
  },
  methods: {
    gostores() {
      this.$router.replace('stores');
    },
  }
}
</script>

<style scoped lang="scss">
  .footer{
    background-color:#3D3D50;
    display: flex;
    height: 30vh;
  }
  .container{
    // padding-top: 7rem;
    width: 100%;
    // height: 30vh;
    display: flex;
    justify-content: center;
    // text-align: left;
    padding: 50px 0 50px 0;
    // color: #ffffff;
    background-color:#3D3D50;
  }

  .item{
    // border-right: .5px solid #f3f3f3bb;
    padding: 0 100px;
    width: 33.3333%;
  }
  .fb{
    position: absolute;
    top: 1540px;
    left: 300px;
    width: 70px;
    height: 70px;
  }
  .phone{
    position: absolute;
    top: 1615px;
    left: 315px;
    width: 40px;
    height: 40px;
  }
  .mail{
    position: absolute;
    top: 1670px;
    left: 315px;
    width: 40px;
    height: 40px;
  }

  .fbtext{
    position: absolute;
    top: 1563px;
    left: 365px;
    color: #fff;
    font-size: 16px;
  }
  .phonetext{
    position: absolute;
    top: 1625px;
    left: 365px;
    color: #fff;
    font-size: 14px;
  }
  .mailtext{
    position: absolute;
    top: 1680px;
    left: 365px;
    color: #fff;
    font-size: 14px;
  }
  .end{
    position: absolute;
    top: 1740px;
    left: 900px;
    color: #000;
  }
  .link-right {
            width: 50px;
            height: 20%;
            position: absolute;
            border-right: solid #ACC0D8 1px;
  }
  .endtext{
    color: #fff;
    font-size: 16px;
    font-family: Microsoft JhengHei;
    // text-align: left;
    padding: 0 100px;
  }

  .code{
    white-space: normal;
    word-wrap: break-word;
    float: left;
  }
  .code a{
    white-space: normal;
    word-wrap: break-word;
    float: left;
  }
</style>
