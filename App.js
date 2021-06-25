import React, { useState, useEffect } from 'react';
import { StyleSheet, View, Text, SafeAreaView, StatusBar, Button } from 'react-native';
import Form from './src/components/Form';
import Footer from './src/components/Footer';
import ResultCalculation from './src/components/ResultCalculation';
import colors from './src/utils/colors'

export default function App() {
  const [capital, setCapital] = useState(null);
  const [interes, setInteres] = useState(null);
  const [meses, setMeses] = useState(null);
  const [total, setTotal] = useState(null);
  const [errorMessage, setErrorMessage] = useState('');

  useEffect( () => {
    if (capital && interes && meses) {
      calculate();
    } else {
      reset();
    }
  }, [capital, interes, meses])

  const calculate = () => {
    reset();
    if(!capital) {
      setErrorMessage('Añade la cantidad que quieres solicitar');
    }else if(!interes) {
      setErrorMessage('Añade el interés del préstamo');
    }else if(!meses) {
      setErrorMessage('Selecciona los meses a pagar');
    } else {
      const i = interes / 100;
      const fee = capital / ((1 - Math.pow(i+1, -meses)) / i);
      setTotal({
        monthlyFee: fee.toFixed(2).replace('.', ','),
        totalPayable: (fee * meses).toFixed(2).replace('.', ',')
      })
    }
  }

  const reset = () => {
    setErrorMessage('');
    setTotal(null);
  }
  return(
    <>
    <StatusBar barStyle="light-content"></StatusBar>
      <SafeAreaView style={styles.safeArea}>
        <View style={styles.background}></View>
        <Text style={styles.titleApp}>Cotizador de Préstamos</Text>
        <Form setCapital={setCapital} setInteres={setInteres} setMeses={setMeses}></Form>
      </SafeAreaView>
      <ResultCalculation 
        errorMessage={errorMessage}
        capital={capital}
        interes={interes}
        meses={meses}
        total={total}
      ></ResultCalculation>
      <Footer calculate={calculate}></Footer>    
    </>
  );
}

const styles = StyleSheet.create({
  safeArea: {
    height: 290,
    alignItems: 'center'
  },
  background: {
    backgroundColor: colors.PRIMARY_COLOR,
    borderBottomLeftRadius: 30,
    borderBottomRightRadius: 30,
    height: 200,
    width: '100%',
    position: 'absolute',
    zIndex: -1

  },
  titleApp: {
    fontSize: 25,
    fontWeight: 'bold',
    color: '#fff',
    marginTop: 15
  }
});