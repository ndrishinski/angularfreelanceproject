import { Component } from '@angular/core';
import { Proposal } from './proposal';

@Component({
  moduleId: module.id,
  selector: 'proposal-list',
  templateUrl: 'proposal-list.component.html',
  styleUrls: ['proposal-list.component.css']
})
export class ProposalListComponent {
  proposalOne: Proposal = new Proposal(15, 'ABC Company', 'http://portfolio.jordanhudgens.com', 'Ruby on Rails', 150, 120, 15, 'jordan@devcamp.com')
  proposalTwo: Proposal = new Proposal(15, 'ABC Company', 'http://portfolio.jordanhudgens.com', 'Ruby on Rails', 150, 120, 15, 'jordan@devcamp.com')
  proposalThree: Proposal = new Proposal(15, 'ABC Company', 'http://portfolio.jordanhudgens.com', 'Ruby on Rails', 150, 120, 15, 'jordan@devcamp.com')

  proposals: Proposal[] = [
    this.proposalOne, 
    this.proposalTwo, 
    this.proposalThree
  ]
}