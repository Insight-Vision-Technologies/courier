import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-help',
  templateUrl: './help.component.html',
  styleUrls: ['./help.component.css']
})
export class HelpComponent implements OnInit {
  panelOpenState = false;
  constructor() { }

  ngOnInit(): void {
  }

  faq: any[] = [
    {
      question: 'Why does it think the jQuery plugin is missing?',
      answer: 'Remember: load jQuery before AngularJS if you are using jQuery plugins!'
    },
    {
      question: 'How do I access the DOM from a controller?',
      answer: 'DO NOT perform DOM selection/traversal from the controller. The HTML hasn\'t rendered yet. Look up \'directives\'.'
    },
    {
      question: 'How do I access the DOM from a controller?',
      answer: 'DO NOT perform DOM selection/traversal from the controller. The HTML hasn\'t rendered yet. Look up \'directives\'.'
    },
    {
      question: 'How do I access the DOM from a controller?',
      answer: 'DO NOT perform DOM selection/traversal from the controller. The HTML hasn\'t rendered yet. Look up \'directives\'.'
    },
    {
      question: 'How do I access the DOM from a controller?',
      answer: 'DO NOT perform DOM selection/traversal from the controller. The HTML hasn\'t rendered yet. Look up \'directives\'.'
    },
    {
      question: 'How do I access the DOM from a controller?',
      answer: 'DO NOT perform DOM selection/traversal from the controller. The HTML hasn\'t rendered yet. Look up \'directives\'.'
    },
    {
      question: 'How do I access the DOM from a controller?',
      answer: 'DO NOT perform DOM selection/traversal from the controller. The HTML hasn\'t rendered yet. Look up \'directives\'.'
    }
  ];

}
