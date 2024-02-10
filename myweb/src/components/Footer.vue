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
            <!--footer畫面右區-->
            <!-- <div class="col-sm-12 col-md-4 m-3">
                <img src="/img/layout/footer.jpg" alt="" width="300">
            </div> -->
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
    top: 1500px;
    left: 300px;
    width: 70px;
    height: 70px;
  }
  .phone{
    position: absolute;
    top: 1575px;
    left: 315px;
    width: 40px;
    height: 40px;
  }
  .mail{
    position: absolute;
    top: 1630px;
    left: 315px;
    width: 40px;
    height: 40px;
  }

  .fbtext{
    position: absolute;
    top: 1523px;
    left: 365px;
    color: #fff;
    font-size: 16px;
  }
  .phonetext{
    position: absolute;
    top: 1585px;
    left: 365px;
    color: #fff;
    font-size: 14px;
  }
  .mailtext{
    position: absolute;
    top: 1640px;
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
</style>
