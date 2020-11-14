<template>
  <div class="camera">
    <!-- 导航 -->
    <input type="radio" id="nav-1" name="nav" class="nav-trigger-1" />
    <input type="radio" id="nav-2" name="nav" class="nav-trigger-2" />
    <input type="radio" id="nav-3" name="nav" class="nav-trigger-3" />
    <input type="radio" id="nav-4" name="nav" class="nav-trigger-4" />
    <form class="stage">
      <!-- 开关 -->
      <input type="radio" id="globe" class="globe-trigger" />
      <input type="radio" id="hammer" class="hammer-trigger" />
      <input type="radio" id="drawer" class="drawer-trigger" />
      <input type="radio" id="slab" class="slab-trigger" />
      <input type="checkbox" id="picture" class="picture-trigger" />
      <input type="radio" id="slab-groove" class="slab-groove-trigger" />
      <input type="radio" id="usb" class="usb-trigger" />
      <input type="radio" id="pc" class="pc-trigger" />
      <input type="radio" id="key" class="key-trigger" />
      <input type="radio" id="door" class="door-trigger" />
      <input type="radio" id="door-open" class="door-open-trigger" />
      <!-- 场景 -->
      <div class="scene scene-1">
        <label
          for="door"
          class="door h-center"
          data-tooltip="door"
          data-placement="top"
        >
          <img
            src="https://i.loli.net/2020/10/25/ZnB2IaV5Nq76MfR.png"
            alt
            class="w-24"
          />
        </label>
        <label
          for="door-open"
          class="door-open h-center"
          data-tooltip="door"
          data-placement="top"
        >
          <img
            src="https://i.loli.net/2020/10/25/9JgmT4Me6tHpY5c.png"
            alt
            class="w-24"
          />
        </label>
        <nav class="navs">
          <label for="nav-4" class="nav-left"></label>
          <label for="nav-2" class="nav-right"></label>
        </nav>
        <div class="hints">
          <div class="hint door-trigger-active">
            You unlocked the door with the key.
          </div>
          <div class="hint door-open-trigger-active">
            Congratulations! You cleared the game!
          </div>
        </div>
      </div>
      <div class="scene scene-2">
        <label
          for="drawer"
          class="drawer"
          data-tooltip="drawer"
          data-placement="left"
        >
          <img
            src="https://i.loli.net/2020/10/25/kiEUTazlO3GeRA2.png"
            alt
            class="w-12"
          />
        </label>
        <label
          for="globe"
          class="globe"
          data-tooltip="globe"
          data-placement="top"
        >
          <img
            src="https://i.loli.net/2020/10/25/YBnOQ2jVtSTmFkE.png"
            alt
            class="w-8"
          />
        </label>
        <img
          src="https://i.loli.net/2020/10/25/TfAyWaEN1k28lOv.png"
          alt
          class="breach w-12"
          title="breach"
        />
        <label
          for="slab"
          class="slab"
          data-tooltip="slab"
          data-placement="left"
        >
          <img
            src="https://i.loli.net/2020/10/25/J5GrKZRVpf4aU9b.png"
            alt
            class="w-6"
          />
        </label>
        <label
          for="slab-groove"
          class="slab-groove"
          data-tooltip="slab-groove"
          data-placement="bottom"
        >
          <img
            src="https://i.loli.net/2020/10/25/tk3IoO4vVqhS529.png"
            alt
            class="w-6"
          />
        </label>
        <img
          src="https://i.loli.net/2020/10/25/J5GrKZRVpf4aU9b.png"
          alt
          class="slab-installed w-6"
          title="slab-installed"
        />
        <label
          for="picture"
          class="picture"
          data-tooltip="picture"
          data-placement="bottom"
        >
          <img
            src="https://i.loli.net/2020/10/25/jeZJHvi2dlL56uG.png"
            alt
            class="w-8"
          />
        </label>
        <label for="usb" class="usb" data-tooltip="usb" data-placement="top">
          <img
            src="https://i.loli.net/2020/10/25/DjldpVuToA5Fh9Y.png"
            alt
            class="w-4"
          />
        </label>
        <nav class="navs">
          <label for="nav-1" class="nav-left"></label>
          <label for="nav-3" class="nav-right"></label>
        </nav>
        <div class="hints">
          <div class="hint globe-trigger-active">
            You rotated the globe, and something droped down.
          </div>
          <div class="hint drawer-trigger-active">
            You cracked the drawer with the hammer, and found a slab.
          </div>
          <div class="hint slab-trigger-active">You picked a slab.</div>
          <div class="hint slab-groove-trigger-active">
            You put the slab into the groove, and found a usb.
          </div>
          <div class="hint usb-trigger-active">You picked a usb.</div>
        </div>
      </div>
      <div class="scene scene-3">
        <div class="password">
          I I IV <br />
          V I IV
        </div>
        <label
          for="hammer"
          class="hammer"
          data-tooltip="hammer"
          data-placement="top"
        >
          <img
            src="https://i.loli.net/2020/10/25/KhVp4EaMoYrjlIC.png"
            alt
            class="w-6"
          />
        </label>
        <nav class="navs">
          <label for="nav-2" class="nav-left"></label>
          <label for="nav-4" class="nav-right"></label>
        </nav>
        <div class="hints">
          <div class="hint hammer-trigger-active">You picked a hammer.</div>
        </div>
      </div>
      <div class="scene scene-4">
        <label
          for="pc"
          class="pc h-center"
          data-tooltip="pc"
          data-placement="top"
        >
          <img
            src="https://i.loli.net/2020/10/26/VuNWLqTlZIfvUsF.png"
            alt
            class="w-16"
          />
        </label>
        <label
          for="pc-on"
          class="pc-on h-center"
          data-tooltip="pc-on"
          data-placement="top"
        >
          <img
            src="https://i.loli.net/2020/10/25/y8OJ7QtlnFZAvrV.png"
            alt
            class="w-16"
          />
        </label>
        <input
          type="password"
          id="password"
          pattern="114514"
          class="password-input form-control"
          required
        />
        <img
          src="https://i.loli.net/2020/10/25/rjmZ1gyTRdUzAk7.png"
          alt
          class="desk w-24 h-center"
        />
        <label
          for="key"
          class="key h-center"
          data-tooltip="key"
          data-placement="top"
        >
          <img
            src="https://i.loli.net/2020/10/25/wfVxH9bDORkjr5q.png"
            alt
            class="w-6"
          />
        </label>
        <nav class="navs">
          <label for="nav-3" class="nav-left"></label>
          <label for="nav-1" class="nav-right"></label>
        </nav>
        <div class="hints">
          <div class="hint pc-trigger-active">
            The PC is turned on, which looks like you need to enter the
            password.
          </div>
          <div class="hint key-trigger-active">You picked a key.</div>
        </div>
      </div>
    </form>
  </div>
</template>
<script>
export default {};
</script>
<style lang="scss" scoped>
@import url(https://cdn.jsdelivr.net/npm/@alphardex/aqua.css@1.5.5/dist/aqua.min.css);

// 攻略
// 1. 左转，转动地球仪
// 2. 右转，发现一根锤子，点击捡起，记住墙上的数字
// 3. 左转，点击柜子，用锤子砸开它，获得一个圆盘
// 4. 点击墙上的壁画，壁画移开，看到一圆盘印，嵌入圆盘，获得一个usb
// 5. 右转2次，将usb插入电脑，电脑开启，输入墙上的密码，获得钥匙
// 6. 右转，用钥匙打开大门，游戏结束

.form-control {
  --input-padding: 1px;
  --input-bg: transparent;

  border: none;
}

.camera {
  --stage-width: 18rem;
  --scene-id: 0;
  --secondary-color-darkest: #333;
  --yellow-color-1: #e67e22;

  position: relative;
  width: var(--stage-width);
  height: var(--stage-width);
  overflow: hidden;
}

.stage {
  transform: translateY(calc(var(--stage-width) * var(--scene-id) * -1));
}

.scene {
  position: relative;
  width: var(--stage-width);
  height: var(--stage-width);
  background: linear-gradient(to bottom, #dad3c5 0 75%, #2b1814 0 0);
}

.hints {
  position: absolute;
  bottom: 0.2rem;
  width: 100%;
  color: white;
  font-size: 0.75rem;
  text-align: center;
}

input[type="checkbox"],
input[type="radio"] {   
  display: none;
}

label {
  position: absolute;
  display: inline-block;
  color: white;
  font-size: 12px;
  cursor: pointer;
  transition: 0.1s;

  &:hover {
    filter: brightness(1.5);
  }
}

.navs {
  position: absolute;
  top: 50%;
  width: 100%;
  display: flex;
  justify-content: space-between;
  transform: translateY(-50%);
  pointer-events: none;

  label {
    position: static;
    width: 2rem;
    height: 2rem;
    background: var(--yellow-color-1);
    pointer-events: auto;

    &.nav-left {
      clip-path: polygon(50% 50%, 100% 100%, 100% 0);
    }

    &.nav-right {
      clip-path: polygon(0 0, 0 100%, 50% 50%);
    }
  }
}

// 机关

.triggers {
  display: flex;
  flex-direction: column;
}

.hint {
  display: none;
}

// 导航

@for $i from 1 through 4 {
  .nav-trigger-#{$i}:checked {
    & ~ .stage {
      --scene-id: #{$i - 1};
    }
  }
}

// 1. 转动地球仪，出现锤子，捡起锤子

.hammer {
  display: none;
  transition: 0.3s;
}

.globe-trigger:checked {
  & ~ .scene {
    .globe {
      pointer-events: none;
    }

    .hammer {
      display: inline-block;
    }

    .hints {
      .hint {
        display: none !important;
      }

      .globe-trigger-active {
        display: inline-block !important;
      }
    }
  }
}

.hammer-trigger:checked {
  & ~ .scene {
    .hammer {
      transform: scale(0);
      opacity: 0;
    }

    .hints {
      .hint {
        display: none !important;
      }

      .hammer-trigger-active {
        display: inline-block !important;
      }
    }
  }
}

// 2. 用锤子砸开柜子，出现圆盘，捡起圆盘

.drawer {
  pointer-events: none;
}

.slab {
  display: none;
  transition: 0.3s;
}

.breach {
  display: none;
}

.hammer-trigger:checked {
  & ~ .scene {
    .drawer {
      pointer-events: auto;
    }
  }
}

.drawer-trigger:checked {
  & ~ .scene {
    .drawer {
      pointer-events: none !important;
    }

    .slab {
      display: inline-block;
    }

    .breach {
      display: inline-block;
    }

    .hints {
      .hint {
        display: none !important;
      }

      .drawer-trigger-active {
        display: inline-block !important;
      }
    }
  }
}

.slab-trigger:checked {
  & ~ .scene {
    .slab {
      transform: scale(0);
      opacity: 0;
    }

    .hints {
      .hint {
        display: none !important;
      }

      .slab-trigger-active {
        display: inline-block !important;
      }
    }
  }
}

// 3. 点击壁画，出现圆盘印，点击圆盘印，出现usb，捡起usb

.slab-groove {
  pointer-events: none;
}

.slab-installed {
  display: none;
}

.picture-trigger:checked {
  & ~ .scene {
    .picture {
      transform: translateX(2rem);
    }
  }
}

.usb {
  display: none;
  transition: 0.3s;
}

.slab-trigger:checked {
  & ~ .scene {
    .slab-groove {
      pointer-events: auto;
    }
  }
}

.slab-groove-trigger:checked {
  & ~ .scene {
    .slab-groove {
      display: none;
      pointer-events: none !important;
    }

    .slab-installed {
      display: inline-block;
    }

    .usb {
      display: inline-block;
    }

    .hints {
      .hint {
        display: none !important;
      }

      .slab-groove-trigger-active {
        display: inline-block !important;
      }
    }
  }
}

.usb-trigger:checked {
  & ~ .scene {
    .usb {
      transform: scale(0);
      opacity: 0;
    }

    .hints {
      .hint {
        display: none !important;
      }

      .usb-trigger-active {
        display: inline-block !important;
      }
    }
  }
}

// 4. 将usb插入电脑，电脑开启，输入墙上的密码，获得钥匙，打开大门

.pc {
  pointer-events: none;
}

.pc-on {
  display: none;
}

.password-input {
  display: none;
}

.door {
  pointer-events: none;
}

.door-open {
  display: none;
}

.key {
  display: none;
  transition: 0.3s;
}

.usb-trigger:checked {
  & ~ .scene {
    .pc {
      pointer-events: auto;
    }
  }
}

.pc-trigger:checked {
  & ~ .scene {
    .pc {
      pointer-events: none !important;
    }

    .pc-on {
      display: inline-block;
    }

    .password-input {
      display: inline-block;
    }

    .hints {
      .hint {
        display: none !important;
      }

      .pc-trigger-active {
        display: block !important;
      }
    }
  }
}

.password-input:valid {
  pointer-events: none;

  & ~ .key {
    display: inline-block;
  }
}

.key-trigger:checked {
  & ~ .scene {
    .key {
      transform: scale(0);
      opacity: 0;
    }

    .door {
      pointer-events: auto;
    }

    .hints {
      .hint {
        display: none !important;
      }

      .key-trigger-active {
        display: block !important;
      }
    }
  }
}

.door-trigger:checked {
  & ~ .scene {
    .door {
      display: none;
      pointer-events: none !important;
    }

    .door-open {
      display: inline-block;
    }

    .hints {
      .hint {
        display: none !important;
      }

      .door-trigger-active {
        display: block !important;
      }
    }
  }
}

.door-open-trigger:checked {
  & ~ .scene {
    .door-open {
      pointer-events: none;
    }

    .hints {
      .hint {
        display: none !important;
      }

      .door-open-trigger-active {
        display: block !important;
      }
    }

    .navs {
      display: none;
    }
  }
}

// 物品摆放

.door {
  top: 27.3%;
}

.globe {
  top: 34.5%;
  right: 26.7%;
}

.drawer {
  top: 48.5%;
  right: 24%;
}

.picture {
  top: 15%;
  left: 28%;
  transition: transform 0.3s, filter 0.1s;
}

.password {
  position: absolute;
  top: 7%;
  left: 36%;
  width: 5rem;
  line-height: 2;
  font-size: 2rem;
  white-space: nowrap;
  text-align: center;
  font-weight: bold;
}

.hammer {
  top: 60%;
  left: 45%;
}

.breach {
  position: absolute;
  top: 56%;
  right: 24%;
}

.slab {
  top: 77%;
  right: 28%;
}

.slab-groove,
.slab-installed {
  position: absolute;
  top: 20%;
  left: 29%;
}

.usb {
  top: 74%;
  left: 28%;
}

.desk {
  position: absolute;
  top: 61%;
}

.pc,
.pc-on {
  top: 45%;
}

.key {
  top: 77%;
}

.door-open {
  position: absolute;
  top: 27.5%;
}

.password-input {
  position: absolute;
  top: 47.5%;
  left: 42.5%;
  width: 2.5rem;
  font-size: 12px;
}
</style>
