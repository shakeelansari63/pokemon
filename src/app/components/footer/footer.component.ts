import { Component, OnInit } from '@angular/core';
import { faGithubAlt} from '@fortawesome/free-brands-svg-icons'

@Component({
  selector: 'app-footer',
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.scss']
})
export class FooterComponent implements OnInit {

  constructor() { }

  faGitIcon=faGithubAlt;

  ngOnInit(): void {
  }

}
