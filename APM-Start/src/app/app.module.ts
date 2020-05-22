import { NgModule } from '@angular/core'
import { BrowserModule } from '@angular/platform-browser'
import { HttpClientModule } from '@angular/common/http'
import { BrowserAnimationsModule } from '@angular/platform-browser/animations'

// Imports for loading & configuring the in-memory web api
import { InMemoryWebApiModule } from 'angular-in-memory-web-api'
import { ProductData } from './products/product-data'

import { AppComponent } from './app.component'
import { WelcomeComponent } from './home/welcome.component'
import { PageNotFoundComponent } from './page-not-found.component'

/* Feature Modules */
import { ProductModule } from './products/product.module'
import { UserModule } from './user/user.module'
import { MessageModule } from './messages/message.module'
import { AppRoutingModule } from './app-routing.module'

@NgModule({
	imports: [
		BrowserModule,
		BrowserAnimationsModule,
		HttpClientModule,
		InMemoryWebApiModule.forRoot(ProductData),
		ProductModule,
		UserModule,
		MessageModule,
		AppRoutingModule,
	],
	declarations: [AppComponent, WelcomeComponent, PageNotFoundComponent],
	bootstrap: [AppComponent],
})
export class AppModule {}
