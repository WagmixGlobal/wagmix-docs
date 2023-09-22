/**
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
import React from 'react';
import clsx from 'clsx';
import styles from './HomepageFeatures.module.css';

type FeatureItem = {
  title: string;
  image: string;
  description: JSX.Element;
};

const FeatureList: FeatureItem[] = [
  {
    title: 'Access to Undervalued Assets',
    image: require('@site/static/img/feature-undervalued.png').default,
    description: (
      <>
        At Wagmix Exchange, we believe in the potential of undiscovered gems in the crypto world. That's why we offer a platform where you can get leveraged exposure to undervalued assets. Whether it's a promising new project or a hidden gem, you can seize opportunities and maximize your returns with up to 100x leverage.
      </>
    ),
  },
  {
    title: 'Highly Performant and Secure',
    image: require('@site/static/img/feature-performant.png').default,
    description: (
      <>
        We understand the importance of a robust and secure trading environment. Wagmix Exchange is built with state-of-the-art technology to provide lightning-fast trade execution, ensuring you never miss out on market movements. Our stringent security protocols safeguard your assets, so you can trade with confidence.
      </>
    ),
  },
  {
    title: 'Advanced Trading Tools',
    image: require('@site/static/img/feature-tools.png').default,
    description: (
      <>
          We empower traders with a suite of advanced trading tools. From real-time charts and technical indicators to customizable trading dashboards, we provide everything you need to make informed decisions. Whether you're a novice or an experienced trader, our platform caters to your trading preferences and strategies.
      </>
    ),
  },
];

function Feature({title, image, description}: FeatureItem) {
  return (
    <div className={clsx('col col--4')}>
      <div className="text--center">
        <img className={styles.featureSvg} alt={title} src={image} />
      </div>
      <div className="text--center padding-horiz--md">
        <h3>{title}</h3>
        <p>{description}</p>
      </div>
    </div>
  );
}

export default function HomepageFeatures(): JSX.Element {
  return (
    <section className={styles.features}>
      <div className="container">
        <div className="row">
          {FeatureList.map((props, idx) => (
            <Feature key={idx} {...props} />
          ))}
        </div>
      </div>
    </section>
  );
}
