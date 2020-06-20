let data = {
  label: 'голосов',
  values: [0, 65, 65, 130]
}

class Chart {
  constructor(data) {
    this.donutChart = document.querySelector('.chart')
    this.label = data.label
    this.values = data.values
    this.angleOffset = -90
    this.strokeDasharray = 376.99111843077515
    this.chartData = []
  }
  init() {
    this.calculateChartData()
    const chart = `
      <svg width="120" height="120" viewBox="0 0 125 125">
        <defs>
          <linearGradient id="grad1" x1="0%" y1="0%" x2="0%" y2="100%">
            <stop offset="0%" style="stop-color:#919191;"></stop>
            <stop offset="100%" style="stop-color:#3D4975;"></stop>
          </linearGradient>
        </defs>
        <circle class="unit" r="60" cx="62.5" cy="62.5" stroke="url(#grad1)" stroke-dasharray="${this.strokeDasharray - 2}" stroke-dashoffset="${this.calculateStrokeDashOffset(this.values[0])}" transform="rotate(${this.returnCircleTransformValue(0)}, 62.5, 62.5)"></circle>
        <defs>
          <linearGradient id="grad2" x1="0%" y1="0%" x2="0%" y2="100%">
            <stop offset="0%" style="stop-color:#BC9CFF;"></stop>
            <stop offset="100%" style="stop-color:#8BA4F9;"></stop>
          </linearGradient>
        </defs>
        <circle class="unit" r="60" cx="62.5" cy="62.5" stroke="url(#grad2)" stroke-dasharray="${this.strokeDasharray - 2}" stroke-dashoffset="${this.calculateStrokeDashOffset(this.values[1])}" transform="rotate(${this.returnCircleTransformValue(1)}, 62.5, 62.5)"></circle>
        <defs>
          <linearGradient id="grad3" x1="0%" y1="0%" x2="0%" y2="100%">
            <stop offset="0%" style="stop-color:#6FCF97;"></stop>
            <stop offset="100%" style="stop-color:#66D2EA;"></stop>
          </linearGradient>
        </defs>
        <circle class="unit" r="60" cx="62.5" cy="62.5" stroke="url(#grad3)" stroke-dasharray="${this.strokeDasharray - 2}" stroke-dashoffset="${this.calculateStrokeDashOffset(this.values[2])}" transform="rotate(${this.returnCircleTransformValue(2)}, 62.5, 62.5)"></circle>
        <defs>
          <linearGradient id="grad4" x1="0%" y1="0%" x2="0%" y2="100%">
            <stop offset="0%" style="stop-color:#FFE39C;"></stop>
            <stop offset="100%" style="stop-color:#FFBA9C;"></stop>
          </linearGradient>
        </defs>
        <circle class="unit" r="60" cx="62.5" cy="62.5" stroke="url(#grad4)" stroke-dasharray="${this.strokeDasharray - 2}" stroke-dashoffset="${this.calculateStrokeDashOffset(this.values[3])}" transform="rotate(${this.returnCircleTransformValue(3)}, 62.5, 62.5)"></circle>
        <g class="chart__text">
          <text class="chart__number" x="50%" y="50%">${this.total()}</text>
          <text class="chart__label" x="50%" y="50%">${this.label}</text>
        </g>
      </svg>`

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
