import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { AccountService } from '../_services/account.service';
import { ISourceOptions } from 'tsparticles';

@Component({
    selector: 'app-login',
    templateUrl: './login.component.html',
    styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
    model: any = {};
    options: ISourceOptions = {
        background: {
            color: {
                value: "#ffb3b3;"
            }
        },
        fpsLimit: 40,
        interactivity: {
            detectsOn: "canvas",
            events: {
                onClick: {
                    enable: true,
                    mode: "push"
                },
                onHover: {
                    enable: true,
                    mode: "repulse"
                },
                resize: true
            },
            modes: {
                bubble: {
                    distance: 100,
                    duration: 2,
                    opacity: 0.5,
                    size: 5                  
                },
                push: {
                    quantity: 4
                },
                repulse: {
                    distance: 100,
                    duration: 0.4
                }
            }
        },
        particles: {
            color: {
                value: "#0099ff"
            },
            links: {
                color: "#0099ff",
                distance: 30,
                enable: true,
                opacity: 0.4,
                width: 1
            },
            collisions: {
                enable: true
            },
            move: {
                direction: "none",
                enable: true,
                outMode: "bounce",
                random: false,
                speed: 2,
                straight: false
            },
            number: {
                density: {
                    enable: true,
                    value_area: 1000
                },
                value: 300
            },
            opacity: {
                value: 1
            },
            shape: {
                type: "circle"
            },
            size: {
                random: true,
                value: 2
            }

        },
        detectRetina: true
    };

    constructor(public accountService: AccountService, private router: Router, private toastr: ToastrService) { }

    ngOnInit(): void {
    }

    login() {
        this.accountService.login(this.model).subscribe(response => {
            this.router.navigateByUrl('/home');
        })
    }

}
