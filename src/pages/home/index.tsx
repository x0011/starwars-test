import React from 'react';
import App from '../../components/app/App';
import { Container } from '../../components/container';
import { Modal } from '../../components/modal';
import { useBackground } from '../../shared/hooks/useBackground';
import { BaseTemplatePage } from '../templates/base';
import styles from './styles.module.scss';
import { Hero } from './ui/hero';
import { Yoda } from './ui/yoda';

export const HomePage = () => {
  useBackground();
  return (
    <BaseTemplatePage>
      <Container injectStyles={styles.homeWrapper}>
        {/* <Modal>Hello world</Modal> */}
        <Hero />
        <Yoda />
      </Container>
    </BaseTemplatePage>
  );
};
