<template>
  <div class="word-wrapper">
    <div>
      <span class="up-0 word-wrapper-item">H</span>
      <span class="up-0 word-wrapper-item">e</span>
      <span class="up-0 word-wrapper-item">a</span>
      <span class="up-0 word-wrapper-item">l</span>
      <span class="up-0 word-wrapper-item">t</span>
      <span class="up-0 word-wrapper-item">h</span>
      <span class="up-0 word-wrapper-item">y</span>
      <span class="up-0 word-wrapper-item">.</span>
    </div>
    <div>
      <span class="up-0 word-wrapper-item">C</span>
      <span class="up-0 word-wrapper-item">h</span>
      <span class="up-0 word-wrapper-item">u</span>
      <span class="up-0 word-wrapper-item">f</span>
      <span class="up-0 word-wrapper-item">f</span>
      <span class="up-0 word-wrapper-item">e</span>
      <span class="up-0 word-wrapper-item">d</span>
      <span class="up-0 word-wrapper-item">.</span>
    </div>
    <div>
      <span class="up-0 word-wrapper-item">P</span>
      <span class="up-0 word-wrapper-item">e</span>
      <span class="up-0 word-wrapper-item">a</span>
      <span class="up-0 word-wrapper-item">c</span>
      <span class="up-0 word-wrapper-item">e</span>
      <span class="up-0 word-wrapper-item">f</span>
      <span class="up-0 word-wrapper-item">u</span>
      <span class="up-0 word-wrapper-item">l</span>
      <span class="up-0 word-wrapper-item">.</span>
    </div>
  </div>
</template>

<script>
export default {
  name: 'JumpWord',
  data(){
    return {
      interval: ''
    }
  },
  mounted () {
    if(this.interval){
      clearInterval(this.interval)
    }
    let index = 1
    const arr = document.querySelectorAll('span.word-wrapper-item')
    this.interval = setInterval(() => {
      const str = ['up-0', 'up-1', 'up-2']
      arr.forEach(item => {
        item.setAttribute('class', str[index] + " word-wrapper-item")
      })
      index++
      if (index === 3) {
        index = 0
      }
    }, 1000);
  }
}
</script>

<style scoped>
.word-wrapper {
  height: 100px;
  overflow: hidden;
  position: relative
}

.word-wrapper span {
  display: inline-block;
  position: relative;
  transition: all .1s cubic-bezier(.65, 0, .21, 1.42) 0s;
  will-change: transform
}

.word-wrapper div,
.word-wrapper div:first-child {
  opacity: 1
}

.word-wrapper div {
  left: 0;
  margin-left: auto;
  margin-right: auto;
  position: absolute;
  right: 0
}

.word-wrapper div:first-child span.up-0,
.word-wrapper div:nth-child(2) span.up-1,
.word-wrapper div:nth-child(3) span.up-2,
.word-wrapper div:nth-child(4) span.up-3,
.word-wrapper div:nth-child(5) span.up-4 {
  -webkit-transform: translateY(0);
  transform: translateY(0)
}

.word-wrapper div:first-child span.up-1,
.word-wrapper div:nth-child(2) span.up-2,
.word-wrapper div:nth-child(3) span.up-3,
.word-wrapper div:nth-child(4) span.up-4,
.word-wrapper div:nth-child(5) span.up-0 {
  -webkit-transform: translateY(-120%);
  transform: translateY(-120%)
}

.word-wrapper div:first-child span.up-2,
.word-wrapper div:nth-child(2) span.up-3,
.word-wrapper div:nth-child(3) span.up-4,
.word-wrapper div:nth-child(4) span.up-0,
.word-wrapper div:nth-child(5) span.up-1 {
  opacity: 0 !important;
  -webkit-transform: translateY(-120%);
  transform: translateY(-120%)
}

.word-wrapper div:first-child span.up-3,
.word-wrapper div:nth-child(2) span.up-4,
.word-wrapper div:nth-child(3) span.up-0,
.word-wrapper div:nth-child(4) span.up-1,
.word-wrapper div:nth-child(5) span.up-2 {
  opacity: 0 !important;
  -webkit-transform: translateY(120%);
  transform: translateY(120%)
}

.word-wrapper div:first-child span.up-4,
.word-wrapper div:nth-child(2) span.up-0,
.word-wrapper div:nth-child(3) span.up-1,
.word-wrapper div:nth-child(4) span.up-2,
.word-wrapper div:nth-child(5) span.up-3 {
  opacity: 1 !important;
  -webkit-transform: translateY(120%);
  transform: translateY(120%)
}

.word-wrapper div span:first-of-type {
  transition-delay: .08s
}

.word-wrapper div span:nth-of-type(2) {
  transition-delay: .11s
}

.word-wrapper div span:nth-of-type(3) {
  transition-delay: .14s
}

.word-wrapper div span:nth-of-type(4) {
  transition-delay: .17s
}

.word-wrapper div span:nth-of-type(5) {
  transition-delay: .2s
}

.word-wrapper div span:nth-of-type(6) {
  transition-delay: .23s
}

.word-wrapper div span:nth-of-type(7) {
  transition-delay: .26s
}

.word-wrapper div span:nth-of-type(8) {
  transition-delay: .29s
}

.word-wrapper div span:nth-of-type(9) {
  transition-delay: .32s
}

.word-wrapper div span:nth-of-type(10) {
  transition-delay: .35s
}

.word-wrapper div span:nth-of-type(11) {
  transition-delay: .38s
}

.word-wrapper div span:nth-of-type(12) {
  transition-delay: .41s
}
</style>
