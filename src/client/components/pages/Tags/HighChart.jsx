import React from 'react'
import ReactHighcharts from 'react-highcharts'
import moment from 'moment'

var config = {
  chart: {
    type: 'spline'
  },
  title: {
    text: undefined
  },
  credits: {
    enabled: false
  },
  xAxis: {
    type: 'datetime',
    dateTimeLabelFormats: { // don't display the dummy year
      month: '%e. %b',
      year: '%b'
    },
    title: '',
  },
  yAxis: {
    title: '',
  },
  series: [{
    data: Array(50).fill(0),
  }],
  legend: {
    enabled: false
  },
  plotOptions: {
    spline: {
      marker: {
        enabled: false
      }
    }
  }
}

class Chart extends React.Component {
  constructor(props) {
    super(props)
  }

  componentDidMount() {
    // this.chart = this.chart.getChart()
    // console.log('this.chart', this.chart)
  }

  componentWillReceiveProps(next) {
    const chart = this.chart.getChart()
    const newValues = next.values.map(v => [v.date, v.value])
    // console.log('rendering new values', newValues)
    // console.log('this.chart', chart)
    chart.series[0].addPoint(newValues.pop(), true, true, false)
  }

  render() {
    return(
      <div className="tag">
        <ReactHighcharts config={config} isPureConfig={true} ref={ref => this.chart = ref} />
      </div>
    )
  }
}

export default Chart
