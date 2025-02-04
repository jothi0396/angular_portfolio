import { Component } from '@angular/core';
import { ProjectsComponent } from './projects/projects.component';
import { EducationComponent } from './education/education.component';
import { NgClass } from '@angular/common';

@Component({
  selector: 'app-root',
  imports: [ProjectsComponent, EducationComponent, NgClass],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css',
})
export class AppComponent {
  title = 'jothi-portfolio';
  private m_projectsActive = false;
  private m_educationActive = false;

  public Projects(): void {
    this.m_projectsActive = !this.m_projectsActive;
  }

  public get projectsActive(): boolean {
    return this.m_projectsActive;
  }

  public Education(): void {
    this.m_educationActive = !this.m_educationActive;
  }

  public get educationActive(): boolean {
    return this.m_educationActive;
  }

  public CollapseAll(): void {
    this.m_projectsActive = false;
    this.m_educationActive = false;
  }

  public ExpandAll(): void {
    this.m_projectsActive = true;
    this.m_educationActive = true;
  }
}
