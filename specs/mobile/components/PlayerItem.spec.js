import React from 'react';
import { shallow } from 'enzyme';
import { expect } from 'chai';
import PlayerItem from '../../../mobile/components/PlayerItem';
import PlayerNameItem from '../../../mobile/components/PlayerNameItem';
import PlayerExtraInfoItem from '../../../mobile/components/PlayerExtraInfoItem';
import AddToQuestButton from '../../../mobile/components/AddToQuestButton';
import RemoveFromQuestButton from '../../../mobile/components/RemoveFromQuestButton';

describe('PlayerItem component', () => {
  const props = {
    player: { uid: 'player1', name: 'Guille', special: 'Merlin', role: 'good' },
    currentPlayer: { uid: 'player2', special: 'Oberon', role: 'bad' },
    gameState: {
      questLeader: 'player2',
      numPlayersOnQuest: 3,
      state: 'choosing',
      questPlayers: {
        player1: true,
        player2: true,
      },
    },
    addToQuest() { return 'addToQuest' },
    removeFromQuest() { return 'removeFromQuest' },
  };

  it('should render the PlayerNameItem', () => {
    const wrapper = shallow(<PlayerItem {...props} />);
    expect(wrapper.find(PlayerNameItem).length).to.equal(1);
  });
  it('should pass the prop name of the player to the PlayerNameItem', () => {
    const wrapper = shallow(<PlayerItem {...props} />);
    expect(wrapper.find(PlayerNameItem).props().name).to.equal('Guille');
  });
  it('should render the PlayerExtraInfoItem', () => {
    const wrapper = shallow(<PlayerItem {...props} />);
    expect(wrapper.find(PlayerExtraInfoItem).length).to.equal(1);
  });
  it('should pass the player\'s special and role', () => {
    const wrapper = shallow(<PlayerItem {...props} />);
    expect(wrapper.find(PlayerExtraInfoItem).props().special).to.equal('Merlin');
    expect(wrapper.find(PlayerExtraInfoItem).props().playerRole).to.equal('good');
  });
  it('should pass the currentplayer\'s special and role', () => {
    const wrapper = shallow(<PlayerItem {...props} />);
    expect(wrapper.find(PlayerExtraInfoItem).props().currentPlayerSpecial).to.equal('Oberon');
    expect(wrapper.find(PlayerExtraInfoItem).props().currentPlayerRole).to.equal('bad');
  });
  it('should render the AddToQuestButton', () => {
    const wrapper = shallow(<PlayerItem {...props} />);
    expect(wrapper.find(AddToQuestButton).length).to.equal(1);
  });
  it('should pass the player and currentPlayerId as props', () => {
    const wrapper = shallow(<PlayerItem {...props} />);
    expect(wrapper.find(AddToQuestButton).prop('currentPlayerId')).to.equal('player2');
    expect(wrapper.find(AddToQuestButton).prop('playerId')).to.equal('player1');
  });
  it('should pass the gameState information as props', () => {
    const wrapper = shallow(<PlayerItem {...props} />);
    expect(wrapper.find(AddToQuestButton).prop('questLeader')).to.equal('player2');
    expect(wrapper.find(AddToQuestButton).prop('numPlayersOnQuest')).to.equal(3);
    expect(wrapper.find(AddToQuestButton).prop('state')).to.equal('choosing');
    expect(wrapper.find(AddToQuestButton).prop('questPlayers')[0]).to.equal('player1');
  });
  it('should pass the addToQuest Function', () => {
    const wrapper = shallow(<PlayerItem {...props} />);
    expect(wrapper.find(AddToQuestButton).prop('addToQuest')()).to.equal('addToQuest');
  });
  it('should render the RemoveFromQuestButton', () => {
    const wrapper = shallow(<PlayerItem {...props} />);
    expect(wrapper.find(RemoveFromQuestButton).length).to.equal(1);
  });
  it('should pass the player and currentPlayerId as props', () => {
    const wrapper = shallow(<PlayerItem {...props} />);
    expect(wrapper.find(RemoveFromQuestButton).prop('currentPlayerId')).to.equal('player2');
    expect(wrapper.find(RemoveFromQuestButton).prop('playerId')).to.equal('player1');
  });
  it('should pass the gameState information as props', () => {
    const wrapper = shallow(<PlayerItem {...props} />);
    expect(wrapper.find(RemoveFromQuestButton).prop('questLeader')).to.equal('player2');
    expect(wrapper.find(RemoveFromQuestButton).prop('state')).to.equal('choosing');
    expect(wrapper.find(RemoveFromQuestButton).prop('questPlayers')[0]).to.equal('player1');
  });
  it('should pass the removeFromquest Function', () => {
    const wrapper = shallow(<PlayerItem {...props} />);
    expect(wrapper.find(RemoveFromQuestButton).prop('removeFromQuest')()).to.equal('removeFromQuest');
  });
});
