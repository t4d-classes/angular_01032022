import { InjectionToken } from "@angular/core";
import { IColorsService } from "../models/IColorsService";
import { simpleColors } from "../services/simple-colors.service";
import { ColorsService } from "../services/colors.service";
export const COLORS_SERVICE_TOKEN = new InjectionToken<IColorsService>(
  "injection based on interface",
  {
    providedIn: 'root',
    factory: () => {
      if (false) {
        return simpleColors;
      } else {
        return new ColorsService();
      }
    },
  }
);