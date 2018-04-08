import React from 'react';
import ReactHighcharts from 'react-highcharts';

class Chart extends React.Component {
  render() {
    const { fishes, order } = this.props;
    const fishIsLoaded =
      Object.keys(fishes).length === 0 && fishes.constructor === Object;

    if (fishIsLoaded) return null;

    const orderKeys = Object.keys(order).filter(
      key => fishes[key].status === 'available',
    );

    const costs = orderKeys.map(key => {
      const count = order[key];
      const price = parseFloat(fishes[key].price);
      const acumulatedPrice = count * price;
      return acumulatedPrice / 100;
    });

    const weights = orderKeys.map(key => order[key]);

    const names = orderKeys.map(key => fishes[key].name);

    const config = {
      chart: {
        type: 'column',
      },
      title: {
        text: '',
      },
      xAxis: {
        categories: names,
      },
      yAxis: [
        {
          min: 0,
          title: {
            text: 'Accumulated price ($)',
          },
        },
        {
          title: {
            text: 'Accumulated weight (lbs)',
          },
          opposite: true,
        },
      ],
      legend: {
        shadow: false,
      },
      tooltip: {
        shared: true,
      },
      plotOptions: {
        column: {
          grouping: false,
          shadow: false,
          borderWidth: 0,
        },
      },
      series: [
        {
          name: 'Cost',
          color: 'rgba(165,170,217,1)',
          data: costs,
          tooltip: {
            valuePrefix: '$',
          },
          pointPadding: 0.3,
          pointPlacement: 0.2,
        },
        {
          name: 'Weight',
          color: 'rgba(126,86,134,.9)',
          data: weights,
          tooltip: {
            valueSuffix: ' lbs',
          },
          pointPadding: 0.4,
          pointPlacement: 0.2,
          yAxis: 1,
        },
      ],
    };
    return <ReactHighcharts config={config} ref="chart" />;
  }
}

export default Chart;
