import { ModuleWithProviders, NgModule } from "@angular/core";
import { HttpClientModule } from "@angular/common/http";

import { PLUTO_ID } from "./providers/client-id.provider";

@NgModule({
  imports: [HttpClientModule]
})
export class PlutoModule {
  static forRoot(clientId?: string): ModuleWithProviders<PlutoModule> {
    return {
      ngModule: PlutoModule,
      providers: [
        {
          provide: PLUTO_ID,
          useValue: clientId
        }
      ]
    };
  }
}
