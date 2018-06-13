import { IndicatorGear } from '../../components/Indicators/index';
import withMqttSubscription from '../../components/hoc/withMqttSubscription';

const options = {
  channels: [{
    topic: 'formula-fake-data/pitot',
    mqttProp: 'current'
  }]
};

export default withMqttSubscription(options)(IndicatorGear);