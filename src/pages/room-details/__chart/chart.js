let data = {
  label: 'голосов',
  values: [0, 65, 65, 130],
  mark: ['Разочарован', 'Удовлетворительно', 'Хорошо', 'Великолепно']
}

class Chart {
  constructor(data) {
    this.donutChart = document.querySelector('.chart')
    this.label = data.label
    this.values = data.values
    this.mark = data.mark
    this.angleOffset = -90
    this.strokeDasharray = 376.99111843077515
    this.chartData = []
    this.background = [
      ['#919191', '#3D4975'],
      ['#BC9CFF', '#8BA4F9'],
      ['#6FCF97', '#66D2EA'],
      ['#FFE39C', '#FFBA9C'],
    ]

  }
  init() {
    this.calculateChartData();
    this.mark.reverse();
    let backgroundMark = this.background.slice();
    let chartItem = '';
    let markItem = '';
    backgroundMark.reverse();
    for(i=0; i<this.values.length; i++) {
      markItem += `<div class="item">
                      <div class="item__color" style="background: linear-gradient(180deg, ${backgroundMark[i][0]} 0%, ${backgroundMark[i][1]} 100%);"></div>
                      <div class="item__description">${this.mark[i]}</div>
                    </div>`
      if (this.values[i] === 0) continue;
      else {
        chartItem += `<defs>
                        <linearGradient id="grad${i}" x1="0%" y1="100%" x2="100%" y2="0%">
                          <stop offset="0%" style="stop-color:${this.background[i][0]};"></stop>
                          <stop offset="100%" style="stop-color:${this.background[i][1]};"></stop>
                        </linearGradient>
                      </defs>
                      <circle class="unit" r="60" cx="62.5" cy="62.5" stroke="url(#grad${i})" stroke-dasharray="${this.strokeDasharray - 2}" stroke-dashoffset="${this.calculateStrokeDashOffset(this.values[i])}" transform="rotate(${this.returnCircleTransformValue(i)}, 62.5, 62.5)"></circle>`
      }
    }
    let chart = `
      <svg width="120" height="120" viewBox="0 0 125 125">
        ${chartItem}
        <g class="chart__text">
          <text class="chart__number" x="50%" y="50%">${this.total()}</text>
          <text class="chart__label" x="50%" y="50%">${this.label}</text>
        </g>
      </svg>
      <div class="chart__mark">
        ${markItem}
      </div>`

    this.donutChart.innerHTML = chart;
  }
  total() {
    let total = 0;
    this.values.forEach(item => (total += item))
    return total;
  }
  dataPercentage(dataVal) {
    return dataVal / this.total();
  }
  calculateStrokeDashOffset(dataVal) {
    const strokeDiff = this.dataPercentage(dataVal) * this.strokeDasharray
    return this.strokeDasharray - strokeDiff
  }
  calculateChartData() {
    this.values.forEach((dataVal, index) => {
      const data = {
        degrees: this.angleOffset,
      }
      this.chartData.push(data)
      this.angleOffset = this.dataPercentage(dataVal) * 360 + this.angleOffset
    })
  }
  returnCircleTransformValue(index) {
    return this.chartData[index].degrees
  }
}

let chart = new Chart(data);
chart.init();
