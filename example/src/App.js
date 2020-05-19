import React from 'react';
import styled from 'styled-components';

import {
  SvgIcons,
  Button,
} from 'package';

import DisplayItem from './components/DisplayItem';
import RadioGroup from '../../src/components/RadioGroup/RadioGroup';
import CheckBoxGroup from '../../src/components/CheckboxGroup/CheckboxGroup';

const Main = styled.div`
  font-family: "Roboto";
  // & > * {
  //   padding: 32px 16px;
  // }
`;

class App extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      name: '',
      description: '',
      switch: 'ON',
      pets: '',
      airport: '',
      hide: true,
      from_node: '',

      number: '',
    };

    this.updateField = this.updateField.bind(this);
  }

  updateField(e, value, field) {
    console.log('value: ', value);

    if ((value || value === '') && field) {
      this.setState({ [field]: value });
    }
  }

  someLabel() {
    return <p>Some Label</p>;
  }

  render() {
    return (
      <Main>
        <SvgIcons.error color="green" />
        <SvgIcons.error />
        <SvgIcons.queued color="blue" />
        <SvgIcons.queued />
        {/* <Dropdown
          styles={{ width: '100%' }}
          // width="100%"
          key="test-dropdown"
          // multiselect
          searchable
          value={this.state.from_node}
          onChange={this.updateField}
          options={[
            { key: 'DEPOSIT-US', text: 'Deposit' },
            { key: 'SUBNET', text: 'Subnet' },
            { key: 'CARD-US', text: 'card' },
          ]}
          propName="from_node"
          placeholder="Node"
          label="From Node"
          renderOptionItem={DisplayItem}
        />

        <Button remove onClick={() => this.setState({ hide: !this.state.hide })}>
          clear
        </Button>
        <SvgIcons.check_filled_circle fillColor="green" borderColor="green" right/>

        <NumberInput
          value={this.state.number}
          onChange={this.updateField}
          propName="number"
          // format='####'
        /> */}
      </Main>
    );
  }
}

export default App;