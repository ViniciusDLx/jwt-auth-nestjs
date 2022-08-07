import { RoleGuard } from './../role.guard';
import { JwtGuard } from './jwt.guard';
import { AuthService } from './auth.service';
import { Body, Controller, Get, Post, Req, UseGuards } from '@nestjs/common';
import { Role } from '../role.decorator';

@Controller()
export class AuthController {
  constructor(private authService: AuthService) {}
  // criar com REST - POST
  @Post('login')
  login(@Body() body) {
    // token
    return { token: this.authService.login(body.username, body.password) };
  }
  @Role('admin')
  @UseGuards(JwtGuard, RoleGuard)
  @Get('test')
  test(@Req() req) {
    console.log(req.user);
    return {
      name: 'Vinicius de Lima Xavier',
    };
  }
}
