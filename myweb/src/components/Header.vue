<template>
    <div class="header">
      <div class="JyeAn">JyeAn</div>
        <div class="container h-100">
          <div class="row h-100 justify-content-center align-items-center">
            <div class="col-sm-12 col-md-6">
              <div class="header-content">
                <h1 class="header-title">
                  自我介紹
                </h1>
                <p span style="font-size:18px;">您好，我叫莊傑安，居住在南投縣草屯鎮，大學與研究所皆選擇了資訊工程學系。對於新的事情會充滿好奇心，並且樂於接受挑戰，遇到問題不會輕易退縮。</p>
                <p span style="font-size:18px;">【大學時期】</p>
                <p span style="font-size:18px;">大學於國立暨南大學就讀，在大三的時候接觸到了影像辨識，這使我深入了解機器學習，學會了如何有效地處理和分析資料，並掌握了多種機器學習處理工具的應用。</p>
                <p span style="font-size:18px;">【碩士時期】</p>
                <p span style="font-size:18px;">研究所期間服務於資料探勘實驗室，專攻項目為自然語言處理。曾參與了兩個計畫。首先，參與了國科會的資安計畫，負責相關人員的帳戶管理和權限管控。運用Vue框架開發了一個可視化介面，同時應用機器學習技術對封包進行偵測。此外，所有的系統都虛擬化，統一由kubernetes管理。因為這是個跨領域的計畫，所以也讓我學習到如何與其他科系的人員進行合作。另外，我也參與了一個與醫院合作的系統開發計畫。我使用了ASP.NET框架，結合Microsoft SQL Server資料庫，將原本繁複的醫院紙本作業數位化。這項計畫讓我深入了解MVC架構的應用，成功地將前端、後端和資料庫串接起來。這項經驗不僅提升了我的技術水準，也使我能夠更有效率地協助醫院人員進行操作。</p>
                <!-- <div class="header-btn mt-3">
                </div> -->
              </div>
            </div>
            <!--header畫面右區-->
            <div class="col-sm-12 col-md-5 m-3">
            </div>
          </div>
        </div>
    </div>
</template>

<script>
export default {
  name: 'Header',
  props: {
    msg: String
  },
  methods: {
    goabout() {
      this.$router.replace('about');
    },
    goproducts() {
      this.$router.replace('products');
    },
  }
};
</script>

<style scoped lang="scss">
  .header {
    // padding-top: 25rem;
    width: 100%;
    height: 100vh;
    text-align: left;
    background-image: url("../../public/img/layout/lp.jpg");
    background-size: cover;
  }
  .JyeAn {
    line-height: 60px;
    position: fixed;
    float: left;
    margin: 16px 46px;
    color: #fff;
    font-weight: bold;
    font-size: 20px;
    letter-spacing: 2px;
  }
  .header-title {
    color: #fff;
  }

  p {
    color: #fff;
  }
</style>
