const tf = require('@tensorflow/tfjs');
require('@tensorflow/tfjs-node');

const a = tf.scalar(10);
const b = tf.scalar(5);
const c = a.mul(b);

console.log('c', c.dataSync());
