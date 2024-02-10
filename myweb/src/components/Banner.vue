<template>
    <div class="banner">
          <div class="container">
            <div class="Expertise">
            <!--banner畫面左區-->
              <div class="python">
                <img src="/img/layout/python.jpg" alt="" width="100">
                <div class="text">
                  <h3>Python</h3>
                  <p>主要使用語言，做過以下主題</p>
                    <p>1.Data Analysis</p>
                    <p>2.Web Crawler</p>
                    <p>3.Machine Learning</p>
                </div>
              </div>
            <!--banner畫面中間-->
              <div class="tool">
                <img src="/img/layout/web.jpg" alt="" width="100">
                <div class="text">
                  <h3>網頁設計</h3>
                  <p>使用過以下框架開發</p>
                    <p>1.ASP.NET</p>
                    <p>2.Flask</p>
                    <p>3.Vue.js</p>
                </div>
              </div>
            <!--banner畫面右區-->
            <div class="project">
                <img src="/img/layout/project.jpg" alt="" width="100">
                <div class="text">
                  <h3>論文與專案計畫</h3>
                  <p>曾參與過的計畫</p>
                    <p>1.碩士論文 - 基於資料增強和對比學習的文本摘要生成</p>
                    <p>2.國科會計畫 - 智慧製造及半導體先進製程資安實測場域計畫</p>
                    <p>3.產業合作 - 醫院醫療衛材新品申請入庫流程資訊化作業</p>
                </div>
              </div>
            </div>
          </div>
        </div>
</template>

<script>
export default {
  name: 'Banner',
  props: {
    msg: String
  },
  methods: {
    jump() {
      window.open('https://github.com/JyeAn/Paper_code', '_blank');
    },
  }
}
</script>

<style scoped lang='scss'>
  .banner{
    // padding-top: 7rem;
    width: 100%;
    // min-height: 500px;
    height: 60vh;
    // text-align: left;
    // background-color: burlywood;
    background-color: #fff;
    // display: flex;
    margin: 0;
    padding: 0;
  }
  .Expertise{
    display: flex;
    width: 100%;
  }
  .python
  {
    position: absolute;
    top: 1000px;
    left: 100px;
    box-shadow: 0 0 15px #dadadae1;
    width: 500px;
    height: 400px;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    text-align: center;
    padding: 20px;
    margin: 0 20px 0;
    border-radius: 20px;
  }
  .text h3
  {
    font-family: Microsoft JhengHei;
    font-weight: bold;
  }

  .text
  {
    font-family: Microsoft JhengHei;
    text-align: center;
    width: 100%;
    font-size: 16px;
  }

  .tool
  {
    position: absolute;
    top: 1000px;
    left: 700px;
    box-shadow: 0 0 15px #dadadae1;
    width: 500px;
    height: 400px;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    text-align: center;
    padding: 20px;
    margin: 0 20px 0;
    border-radius: 20px;
  }
  .project
  {
    position: absolute;
    top: 1000px;
    left: 1300px;
    box-shadow: 0 0 15px #dadadae1;
    width: 500px;
    height: 400px;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    text-align: center;
    padding: 20px;
    margin: 0 20px 0;
    border-radius: 20px;
  }
</style>
