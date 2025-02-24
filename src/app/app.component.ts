// Importa os módulos e componentes necessários do Angular e Angular Material
import { Component } from '@angular/core'; // Componente base do Angular
import { FormsModule } from '@angular/forms'; // Módulo para trabalhar com formulários
import { CommonModule } from '@angular/common'; // Módulo com diretivas comuns do Angular
import { MatIconModule } from '@angular/material/icon'; // Módulo para usar ícones do Material Design
import { MatCardModule } from '@angular/material/card'; // Módulo para usar cards do Material Design
import { MatTabsModule } from '@angular/material/tabs'; // Módulo para usar abas (tabs) do Material Design
import { MatInputModule } from '@angular/material/input'; // Módulo para campos de entrada do Material Design
import { MatButtonModule } from '@angular/material/button'; // Módulo para botões do Material Design
import { MatDividerModule } from '@angular/material/divider'; // Módulo para divisores do Material Design
import { MatFormFieldModule } from '@angular/material/form-field'; // Módulo para campos de formulário do Material Design

// Define o componente principal da aplicação
@Component({
  selector: 'app-root', // Define o seletor do componente (usado no HTML)
  imports: [ // Lista de módulos importados para uso no componente
    FormsModule,
    CommonModule,
    MatCardModule,
    MatIconModule,
    MatTabsModule,
    MatInputModule,
    MatButtonModule,
    MatDividerModule,
    MatFormFieldModule,
  ],
  templateUrl: './app.component.html', // Caminho para o arquivo HTML do componente
  styleUrl: './app.component.scss', // Caminho para o arquivo de estilos do componente
})
export class AppComponent {
  // Variáveis para o formulário de login
  log_email: string = ''; // Armazena o e-mail digitado no login
  log_password: string = ''; // Armazena a senha digitada no login
  loginMessage: string = ''; // Armazena a mensagem de feedback do login
  loginSuccess: boolean = false; // Indica se o login foi bem-sucedido
  loginFormErrors = { email: false, password: false }; // Armazena erros de validação do login

  // Variáveis para o formulário de registro
  reg_email: string = ''; // Armazena o e-mail digitado no registro
  reg_password: string = ''; // Armazena a senha digitada no registro
  reg_confirm_password: string = ''; // Armazena a confirmação de senha digitada no registro
  registerMessage: string = ''; // Armazena a mensagem de feedback do registro
  registerSuccess: boolean = false; // Indica se o registro foi bem-sucedido
  registerFormErrors = { email: false, password: false, confirmPassword: false }; // Armazena erros de validação do registro

  // Função para processar o login
  login() {
    // Validação simples: verifica se os campos de e-mail e senha foram preenchidos
    if (!this.log_email || !this.log_password) {
      this.loginMessage = 'Preencha todos os campos.'; // Mensagem de erro
      this.loginSuccess = false; // Define que o login não foi bem-sucedido
      return; // Interrompe a execução da função
    }

    // Simulação de login bem-sucedido
    if (this.log_email === 'jessica@example.com' && this.log_password === '123456') {
      this.loginMessage = 'Login realizado com sucesso!'; // Mensagem de sucesso
      this.loginSuccess = true; // Define que o login foi bem-sucedido
    } else {
      this.loginMessage = 'E-mail ou senha incorretos.'; // Mensagem de erro
      this.loginSuccess = false; // Define que o login não foi bem-sucedido
    }
  }

  // Função para processar o registro
  register() {
    // Validação simples: verifica se todos os campos foram preenchidos
    if (!this.reg_email || !this.reg_password || !this.reg_confirm_password) {
      this.registerMessage = 'Preencha todos os campos.'; // Mensagem de erro
      this.registerSuccess = false; // Define que o registro não foi bem-sucedido
      return; // Interrompe a execução da função
    }

    // Verifica se as senhas digitadas coincidem
    if (this.reg_password !== this.reg_confirm_password) {
      this.registerMessage = 'As senhas não coincidem.'; // Mensagem de erro
      this.registerSuccess = false; // Define que o registro não foi bem-sucedido
      return; // Interrompe a execução da função
    }

    // Simulação de registro bem-sucedido
    this.registerMessage = 'Registro realizado com sucesso!'; // Mensagem de sucesso
    this.registerSuccess = true; // Define que o registro foi bem-sucedido
  }
}