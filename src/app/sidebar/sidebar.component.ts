import { Component, ElementRef, ViewChild, AfterViewInit  } from '@angular/core';

@Component({
  selector: 'app-sidebar',
  imports: [],
  templateUrl: './sidebar.component.html',
  styleUrl: './sidebar.component.css'
})
export class SidebarComponent implements AfterViewInit{
  @ViewChild('sidebar') sidebar!: ElementRef;
  @ViewChild('closeBtn') closeBtn!: ElementRef;
  @ViewChild('searchBtn') searchBtn!: ElementRef;

  ngAfterViewInit(): void {
    // Access the DOM elements and add event listeners
    const sidebar = this.sidebar.nativeElement;
    const closeBtn = this.closeBtn.nativeElement;
    const searchBtn = this.searchBtn.nativeElement;

    closeBtn.addEventListener('click', () => {
      sidebar.classList.toggle('open');
      this.menuBtnChange(); // Call the function to toggle icons
    });

    searchBtn.addEventListener('click', () => {
      sidebar.classList.toggle('open');
      this.menuBtnChange(); // Call the function to toggle icons
    });
  }

  // Change sidebar button icons
  menuBtnChange(): void {
    const closeBtn = this.closeBtn.nativeElement;
    const sidebar = this.sidebar.nativeElement;

    if (sidebar.classList.contains('open')) {
      closeBtn.classList.replace('bx-menu', 'bx-menu-alt-right');
    } else {
      closeBtn.classList.replace('bx-menu-alt-right', 'bx-menu');
    }
  }

  logOut(): void {
    // Handle log out functionality here
    console.log('Logged out successfully!');
    window.location.href = 'login.php';
  }
}
