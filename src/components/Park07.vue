<!--
* @name 07_停车指引图_小车位_驶入&驶出
* @date 2022-03-04 19:16:48
* @version V1.0.0
!-->
<template>
  <div class="relative box bg-gray-600">
    <div class="o1 hidden">
      <span
        class="
          enterTitle
          z-50
          absolute
          bg-blue-500
          w-64
          h-16
          text-4xl text-center
        "
        style="
          top: 32px;
          left: 248px;
          line-height: 64px;
          background: rgba(0, 0, 0, 0.2);
        "
      >
        车辆驶入
      </span>
      <img
        src="../assets/shareImg/起点.png"
        alt=""
        class="qidian absolute z-30"
        style="top: 1143px; left: 191px"
      />
      <img
        src="../assets/shareImg/终点.png"
        alt=""
        class="zhongdian absolute z-30"
        style="top: 162px; left: 131px"
      />
      <img
        src="../assets/shareImg/终点标识.png"
        alt=""
        class="biaoshi absolute z-30"
        style="top: 99px; left: 123px"
      />
      <img
        src="../assets/unShareImg/驶入路劲-07.png"
        alt=""
        class="enterSVG absolute z-10"
        style="top: 167px; left: 135px"
      />
    </div>
    <div class="o2 hidden">
      <span
        class="
          outTitle
          z-50
          absolute
          bg-blue-500
          w-64
          h-16
          text-4xl text-center
        "
        style="
          top: 32px;
          left: 248px;
          line-height: 64px;
          background: rgba(0, 0, 0, 0.2);
        "
      >
        车辆驶出
      </span>
      <img
        src="../assets/shareImg/终点.png"
        alt=""
        class="qidian2 absolute z-30"
        style="top: 162px; left: 131px"
      />
      <img
        src="../assets/shareImg/起点.png"
        alt=""
        class="zhongdian2 absolute z-30"
        style="top: 1156px; left: 306px"
      />
      <img
        src="../assets/shareImg/终点标识.png"
        alt=""
        class="biaoshi2 absolute z-30"
        style="top: 1100px; left: 298px"
      />
      <img
        src="../assets/unShareImg/驶出路劲-07.png"
        alt=""
        class="outSVG absolute z-10"
        style="top: 167px; left: 135px"
      />
    </div>
    <img src="../assets/shareImg/car.png" alt="" class="car absolute z-50" />
    <img
      src="../assets/shareImg/car2.png"
      alt=""
      class="car2 car2style absolute z-40 hidden"
    />
    <img
      src="../assets/shareImg/car3left.png"
      alt=""
      class="car3 car3style absolute z-50 hidden"
    />
    <img
      src="../assets/shareImg/箭头r.png"
      alt=""
      class="jiantou absolute z-10 hidden"
    />
    <img
      src="../assets/shareImg/箭头r.png"
      alt=""
      class="jiantou absolute z-10 hidden"
    />
    <img
      src="../assets/shareImg/箭头r.png"
      alt=""
      class="jiantou absolute z-10 hidden"
    />
    <img
      src="../assets/shareImg/箭头r.png"
      alt=""
      class="jiantou absolute z-10 hidden"
    />

    <img
      src="../assets/shareImg/箭头r.png"
      alt=""
      class="jiantou absolute z-10 hidden"
    />
    <img
      src="../assets/shareImg/箭头r.png"
      alt=""
      class="jiantou absolute z-10 hidden"
    />
    <img
      src="../assets/shareImg/箭头r.png"
      alt=""
      class="jiantou absolute z-10 hidden"
    />

    <img
      src="../assets/shareImg/箭头r.png"
      alt=""
      class="jiantou absolute z-10 hidden"
    />
    <img
      src="../assets/shareImg/箭头r.png"
      alt=""
      class="jiantou absolute z-10 hidden"
    />
    <!-- <img src="../assets/shareImg/箭头r.png" alt="" class="jiantou absolute z-10 hidden" /> -->
    <!-- <img src="../assets/shareImg/箭头r.png" alt="" class="jiantou absolute z-10 hidden" /> -->

    <img
      src="../assets/shareImg/箭头r.png"
      alt=""
      class="jiantou2 absolute z-10 hidden"
    />
    <img
      src="../assets/shareImg/箭头r.png"
      alt=""
      class="jiantou2 absolute z-10 hidden"
    />
    <img
      src="../assets/shareImg/箭头r.png"
      alt=""
      class="jiantou2 absolute z-10 hidden"
    />

    <img
      src="../assets/shareImg/箭头r.png"
      alt=""
      class="jiantou2 absolute z-10 hidden"
    />
    <img
      src="../assets/shareImg/箭头r.png"
      alt=""
      class="jiantou2 absolute z-10 hidden"
    />
    <img
      src="../assets/shareImg/箭头r.png"
      alt=""
      class="jiantou2 absolute z-10 hidden"
    />

    <img
      src="../assets/shareImg/箭头r.png"
      alt=""
      class="jiantou2 absolute z-10 hidden"
    />
    <img
      src="../assets/shareImg/箭头r.png"
      alt=""
      class="jiantou2 absolute z-10 hidden"
    />
    <img
      src="../assets/shareImg/箭头r.png"
      alt=""
      class="jiantou2 absolute z-10 hidden"
    />
    <img
      src="../assets/shareImg/箭头r.png"
      alt=""
      class="jiantou2 absolute z-10 hidden"
    />
    <img
      src="../assets/shareImg/箭头r.png"
      alt=""
      class="jiantou2 absolute z-10 hidden"
    />
    <!-- <img src="../assets/shareImg/箭头r.png" alt="" class="jiantou2 absolute z-10 hidden" /> -->
    <svg
      width="750px"
      height="1206px"
      version="1.1"
      xmlns="http://www.w3.org/2000/svg"
      xmlns:xlink="http://www.w3.org/1999/xlink"
    >
      <g
        id="页面-1"
        stroke="none"
        stroke-width="1"
        fill="none"
        fill-rule="evenodd"
      >
        <g id="mapsvg">
          <rect id="矩形" x="0" y="0" width="750" height="1206"></rect>

          <path
            d="M205,1148 C202.952543,1148.10757 220,1152.91425 220,1133 C220,1113.08575 220,1029.43476 219,960.5 C218.666638,937.519787 223,918.714157 215,904.194118 C207,889.674079 180.097846,864.436342 175.841157,851.824824 C173.398019,844.586413 172.176451,809.978138 172.176451,748 C172.176451,632.789455 172.176451,570.456122 172.176451,561 C172.176451,526.759664 172.176451,515.920917 172.176451,488.023153 C172.176451,460.12539 171.660703,408.369065 182.75,382.160092 C188.974211,367.449494 194.39643,358.642851 194.39643,305.457218 C194.39643,237.545993 200.026047,185.56457 187,178 C170.52829,168.434442 150,169.87086 143.5,177.43543"
            id="jiantou"
          ></path>

          <path
            d="M76.212169,1146.12052 L179.708533,1146.12052 C179.964155,1045.38343 179.964155,990.901985 179.708533,982.676176 C178.597005,946.907781 179.708533,972.105789 179.708533,953.216121 C179.708533,934.326452 182.650122,920.524876 172.265918,901.851081 C167.26348,892.855254 154.212179,871.833754 148.039029,860.226246 C147.218474,860.226246 139.799907,816.20511 139.799907,795.050781 C139.799907,788.979743 139.799907,703.890999 139.799907,539.78455 C139.716465,483.434279 139.716465,447.864864 139.799907,433.076305 C139.925071,410.893468 152.346002,390.971173 154.050326,375.216209 C155.75465,359.461245 155.843272,318.252046 155.843272,303.364465 C155.843272,267.77074 155.843272,220.091264 155.843272,189.799438 C155.843272,169.477574 149.016702,156.913566 135.686298,156.913566 C125.846527,156.913566 109.964104,156.913566 88.0390289,156.913566"
            id="car"
          ></path>

          <path
            d="M88.1084381,156.933461 C99.857804,156.933461 113.774658,156.933461 129.858999,156.933461 C153.985511,156.933461 156.648483,155.8 156.648483,134.313759 C156.648483,119.989598 156.648483,105.45649 156.648483,90.714437"
            id="car2"
          ></path>

          <path
            d="M156.648483,90.714437 C155.628115,255.090154 155.117931,343.07846 155.117931,354.679356 C155.117931,374.564521 152.801403,386.383166 144.557953,406.208286 C139.06232,419.425033 137.518026,450.848937 139.925071,500.479999 C139.925071,649.168035 139.925071,745.149614 139.925071,788.424738 C139.925071,825.665761 145.631428,855.291874 148.039029,860.226246 C158.999491,882.68969 178.882468,906.306242 179.715235,923.707305 C180.270412,935.308014 180.270412,1004.90531 179.715235,1132.4992 C182.336336,1148.59302 191.42912,1156.72202 206.993586,1156.88621 C222.558052,1157.05039 258.602604,1157.05039 315.127244,1156.88621"
            id="out"
          ></path>

          <path
            d="M147.834684,171.289767 C168.621248,171.096589 181.676354,173.333333 187,178 C192.323646,182.666667 194.985469,192.989551 194.985469,208.968654 L194.985469,328.306092 C193.450234,345.307485 191.455078,358.39858 189,367.57938 C172.827429,394.222299 172.827429,438.74786 172.176451,488.023153 C171.01602,575.861044 172.176451,561 172.176451,572.752215 C172.176451,584.504431 172.000316,773.931714 172.176451,780 C172.440212,789.087262 172.827429,802.289969 172.827429,815.681151 C172.827429,853.011786 177.420702,856.131441 184.563789,865.598351 C195.171332,879.656791 219.013219,902.689087 219.013219,921.496233 C219.013219,940.303378 219.159929,1129.72415 219.013219,1138.49899 C218.866509,1147.27383 218.85329,1159.54118 235.758202,1159 C247.028143,1158.63922 275.775409,1158.63922 322,1159"
            id="jiantou2"
          ></path>
        </g>
      </g>
    </svg>
    <img src="../assets/shareImg/mapbg.png" alt="" class="dbg absolute top-0" />
    <!-- <img src="../assets/shareImg/mapbg.png" alt="" class="absolute top-0 opacity-50" /> -->
  </div>
</template>

<script>
export default {
  name: "Park04",
  props: {
    msg: String,
  },
  mounted() {
    setTimeout(() => {
      this.$anime({
        targets: ".demo",
        translateX: 250,
      });
      console.log(
        'this.$anime.path("#jiantou") :>> ',
        this.$anime.path("#jiantou")
      );

      let path = this.$anime.path("#jiantou");
      let path2 = this.$anime.path("#car");
      let path3 = this.$anime.path("#car2");
      let path4 = this.$anime.path("#out");
      let path5 = this.$anime.path("#jiantou2");

      let myTimeline = this.$anime.timeline();
      myTimeline
        .add({
          targets: ".o1",
          delay: 1000,
          // easing: "linear",
          loopComplete: function () {
            console.log("o1 结束");
            const el = document.querySelector(".o1");
            el.classList.remove("hidden");
            const el2 = document.querySelectorAll(".jiantou");
            el2.forEach((el) => {
              el.classList.remove("hidden");
            });
          },
        })
        .add(
          {
            targets: ".jiantou",
            translateX: path("x"),
            translateY: path("y"),
            rotate: path("angle"),
            easing: "linear",
            opacity: 1,
            delay: this.$anime.stagger(200),
            duration: 4000,
            loop: false,
          },
          "+=1000"
        )
        .add(
          {
            targets: ".car",
            translateX: path2("x"),
            translateY: path2("y"),
            rotate: path2("angle"),
            easing: "linear",
            opacity: 1,
            delay: 0,
            duration: 4500,
            loop: false,
            loopComplete: function () {
              let car = document.querySelector(".car");
              let car2 = document.querySelector(".car2");
              car2.classList.remove("hidden");
              car.classList.add("hidden");
              car2.classList.remove("car2style");
              setTimeout(() => {
                let el = document.querySelector(".o1");
                el.classList.add("hidden");
                const el2 = document.querySelectorAll(".jiantou");
                el2.forEach((el) => {
                  el.classList.add("hidden");
                });
              }, 1000);
              setTimeout(() => {
                let el = document.querySelector(".o2");
                el.classList.remove("hidden");
              }, 2000);
            },
          },
          "-=4200"
        )
        .add({
          targets: ".car2",
          translateX: path3("x"),
          translateY: path3("y"),
          rotate: path3("angle"),
          easing: "linear",
          opacity: 1,
          delay: 2000,
          duration: 2000,
          loop: false,
          begin: function () {
            let car2 = document.querySelector(".car2");
            car2.classList.remove("car2style");
          },
        })
        .add({
          targets: ".car3",
          translateX: path4("x"),
          translateY: path4("y"),
          rotate: path4("angle"),
          easing: "linear",
          opacity: 1,
          delay: 2000,
          duration: 4000,
          loop: false,
          loopComplete: function () {},
          begin: function () {
            // console.log('开始');
            let car2 = document.querySelector(".car2");
            car2.classList.add("hidden");
            let car3 = document.querySelector(".car3");
            car3.classList.remove("hidden");
            car3.classList.remove("car3style");
          },
        })
        .add(
          {
            targets: ".jiantou2",
            translateX: path5("x"),
            translateY: path5("y"),
            rotate: path5("angle"),
            easing: "linear",
            opacity: 1,
            delay: this.$anime.stagger(200),
            duration: 4000,
            loop: false,
            begin: function () {
              const el = document.querySelectorAll(".jiantou2");
              el.forEach((el) => {
                el.classList.remove("hidden");
              });
            },
          },
          "-=6000"
        );
    }, 0);
  },
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
/* .dbg{
  position: absolute;
  top: 0;
} */
.car2style {
  position: absolute;
  top: 748px;
  left: 180px;
}
.car3style {
  top: 370px;
  left: 590px;
}

svg {
  @apply absolute top-0;
}
</style>