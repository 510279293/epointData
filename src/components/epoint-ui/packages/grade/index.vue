<template>

  <div class="grade">
    <section v-if="score>=4 && score<=10" class="grade-section">
      <div style="padding:0 3px">
        <i class='yp-red'></i>
      </div>

    </section>
    <section v-if="score>=11 && score<=40" class="grade-section">
      <div style="padding:0 3px">
        <i class='yp-red'></i>
      </div>
      <div style="padding:0 3px">
        <i class='yp-red'></i>
      </div>
    </section>
    <section v-if="score>=41 && score<=90" class="grade-section">
      <div style="padding:0 3px">
        <i class='yp-red'></i>
      </div>
      <div style="padding:0 3px">
        <i class='yp-red'></i>
      </div>
      <div style="padding:0 3px">
        <i class='yp-red'></i>
      </div>
    </section>
    <section v-if="score>=91 && score<=150" class="grade-section">
      <div style="padding:0 3px">
        <i class='yp-red'></i>
      </div>
      <div style="padding:0 3px">
        <i class='yp-red'></i>
      </div>
      <div style="padding:0 3px">
        <i class='yp-red'></i>
      </div>
      <div style="padding:0 3px">
        <i class='yp-red'></i>
      </div>

    </section>
    <section v-if="score>=151 && score<=250" class="grade-section">
      <div style="padding:0 3px">
        <i class='yp-red'></i>
      </div>
      <div style="padding:0 3px">
        <i class='yp-red'></i>
      </div>
      <div style="padding:0 3px">
        <i class='yp-red'></i>
      </div>
      <div style="padding:0 3px">
        <i class='yp-red'></i>
      </div>
      <div style="padding:0 3px">
        <i class='yp-red'></i>
      </div>
    </section>
    <section v-if="score>=251 && score<=500" class="grade-section">
      <div style="padding:0 3px">
        <i class='yp-blue'></i>
      </div>
    </section>
    <section v-if="score>=501 && score<=1000" class="grade-section">
      <div style="padding:0 3px">
        <i class='yp-blue'></i>
        <i class='yp-blue'></i>

      </div>
    </section>
    <section v-if="score>=1001 && score<=2000" class="grade-section">
      <div style="padding:0 3px">
        <i class='yp-blue'></i>
        <i class='yp-blue'></i>
        <i class='yp-blue'></i>
      </div>
    </section>
    <section v-if="score>=2001 && score<=5000" class="grade-section">
      <div style="padding:0 3px">
        <i class='yp-blue'></i>
        <i class='yp-blue'></i>
        <i class='yp-blue'></i>
        <i class='yp-blue'></i>
      </div>
    </section>
    <section v-if="score>=5001 && score<=10000" class="grade-section">
      <div style="padding:0 3px">
        <i class='yp-blue'></i>
        <i class='yp-blue'></i>
        <i class='yp-blue'></i>
        <i class='yp-blue'></i>
        <i class='yp-blue'></i>
      </div>
    </section>
    <section v-if="score>=10001 && score<=20000" class="grade-section">
      <div style="padding:0 3px">
        <i class='yp-cap'></i>
      </div>
    </section>
    <section v-if="score>=20001 && score<=50000" class="grade-section">
      <div style="padding:0 3px">
        <i class='yp-cap'></i>
        <i class='yp-cap'></i>

      </div>
    </section>
    <section v-if="score>=50001 && score<=100000" class="grade-section">
      <div style="padding:0 3px">
        <i class='yp-cap'></i>
        <i class='yp-cap'></i>
        <i class='yp-cap'></i>

      </div>
    </section>
    <section v-if="score>=100001 && score<=200000" class="grade-section">
      <div style="padding:0 3px">
        <i class='yp-cap'></i>
        <i class='yp-cap'></i>
        <i class='yp-cap'></i>
        <i class='yp-cap'></i>

      </div>
    </section>
    <section v-if="score>=200001 && score<=500000" class="grade-section">
      <div style="padding:0 3px">
        <i class='yp-cap'></i>
        <i class='yp-cap'></i>
        <i class='yp-cap'></i>
        <i class='yp-cap'></i>
        <i class='yp-cap'></i>
      </div>
    </section>
    <section v-if="score>=500001 && score<=1000000" class="grade-section">
      <div style="padding:0 3px">
        <i class='yp-crown'></i>
      </div>
    </section>
    <section v-if="score>=1000001 && score<=2000000" class="grade-section">
      <div style="padding:0 3px">
        <i class='yp-crown'></i>
        <i class='yp-crown'></i>

      </div>
    </section>
    <section v-if="score>=2000001 && score<=5000000" class="grade-section">
      <div style="padding:0 3px">
        <i class='yp-crown'></i>
        <i class='yp-crown'></i>
        <i class='yp-crown'></i>

      </div>
    </section>
    <section v-if="score>=5000001 && score<=10000000" class="grade-section">
      <div style="padding:0 3px">
        <i class='yp-crown'></i>
        <i class='yp-crown'></i>
        <i class='yp-crown'></i>
        <i class='yp-crown'></i>
      </div>
    </section>
    <section v-if="score>=10000001" class="grade-section">
      <div style="padding:0 3px">
        <i class='yp-crown'></i>
        <i class='yp-crown'></i>
        <i class='yp-crown'></i>
        <i class='yp-crown'></i>
        <i class='yp-crown'></i>
      </div>
    </section>
  </div>

</template>
<script type="text/babel">
import index from './index'
export default {
  ...index
}
</script>
<style lang="less" scoped>
.grade {
  .yp-blue {
    background: url(~assets/images/storeGarde/s_blue_1.gif) no-repeat;
    width: 16px;
    height: 16px;
    display: inline-block;
  }
  .yp-cap {
    background: url(~assets/images/storeGarde/s_cap_5.gif) no-repeat;
    width: 16px;
    height: 16px;
    display: inline-block;
  }
  .yp-crown {
    background: url(~assets/images/storeGarde/s_crown_1.gif) no-repeat;
    width: 16px;
    height: 16px;
    display: inline-block;
  }
  .yp-red {
    background: url(~assets/images/storeGarde/s_red_1.gif) no-repeat;
    width: 16px;
    height: 16px;
    display: inline-block;
  }
  i {
    margin-right: 5px;
  }
}
</style>
