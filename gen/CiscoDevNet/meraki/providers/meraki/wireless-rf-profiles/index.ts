// https://registry.terraform.io/providers/ciscodevnet/meraki/1.7.1/docs/resources/wireless_rf_profiles
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface WirelessRfProfilesConfig extends cdktf.TerraformMetaArguments {
  /**
  * The list of items
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/meraki/1.7.1/docs/resources/wireless_rf_profiles#items WirelessRfProfiles#items}
  */
  readonly items: WirelessRfProfilesItems[] | cdktf.IResolvable;
  /**
  * Network ID
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/meraki/1.7.1/docs/resources/wireless_rf_profiles#network_id WirelessRfProfiles#network_id}
  */
  readonly networkId: string;
  /**
  * The organization ID
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/meraki/1.7.1/docs/resources/wireless_rf_profiles#organization_id WirelessRfProfiles#organization_id}
  */
  readonly organizationId: string;
}
export interface WirelessRfProfilesItemsFlexRadiosByModel {
  /**
  * Band to use for each flex radio. For example, [`6`] will set the AP`s first flex radio to 6 GHz
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/meraki/1.7.1/docs/resources/wireless_rf_profiles#bands WirelessRfProfiles#bands}
  */
  readonly bands?: string[];
  /**
  * Model of the AP
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/meraki/1.7.1/docs/resources/wireless_rf_profiles#model WirelessRfProfiles#model}
  */
  readonly model?: string;
}

export function wirelessRfProfilesItemsFlexRadiosByModelToTerraform(struct?: WirelessRfProfilesItemsFlexRadiosByModel | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    bands: cdktf.listMapper(cdktf.stringToTerraform, false)(struct!.bands),
    model: cdktf.stringToTerraform(struct!.model),
  }
}


export function wirelessRfProfilesItemsFlexRadiosByModelToHclTerraform(struct?: WirelessRfProfilesItemsFlexRadiosByModel | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    bands: {
      value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(struct!.bands),
      isBlock: false,
      type: "set",
      storageClassType: "stringList",
    },
    model: {
      value: cdktf.stringToHclTerraform(struct!.model),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class WirelessRfProfilesItemsFlexRadiosByModelOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  * @param complexObjectIndex the index of this item in the list
  * @param complexObjectIsFromSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean) {
    super(terraformResource, terraformAttribute, complexObjectIsFromSet, complexObjectIndex);
  }

  public get internalValue(): WirelessRfProfilesItemsFlexRadiosByModel | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._bands !== undefined) {
      hasAnyValues = true;
      internalValueResult.bands = this._bands;
    }
    if (this._model !== undefined) {
      hasAnyValues = true;
      internalValueResult.model = this._model;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: WirelessRfProfilesItemsFlexRadiosByModel | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._bands = undefined;
      this._model = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._bands = value.bands;
      this._model = value.model;
    }
  }

  // bands - computed: false, optional: true, required: false
  private _bands?: string[]; 
  public get bands() {
    return cdktf.Fn.tolist(this.getListAttribute('bands'));
  }
  public set bands(value: string[]) {
    this._bands = value;
  }
  public resetBands() {
    this._bands = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get bandsInput() {
    return this._bands;
  }

  // model - computed: false, optional: true, required: false
  private _model?: string; 
  public get model() {
    return this.getStringAttribute('model');
  }
  public set model(value: string) {
    this._model = value;
  }
  public resetModel() {
    this._model = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get modelInput() {
    return this._model;
  }
}

export class WirelessRfProfilesItemsFlexRadiosByModelList extends cdktf.ComplexList {
  public internalValue? : WirelessRfProfilesItemsFlexRadiosByModel[] | cdktf.IResolvable

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  * @param wrapsSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
  */
  constructor(protected terraformResource: cdktf.IInterpolatingParent, protected terraformAttribute: string, protected wrapsSet: boolean) {
    super(terraformResource, terraformAttribute, wrapsSet)
  }

  /**
  * @param index the index of the item to return
  */
  public get(index: number): WirelessRfProfilesItemsFlexRadiosByModelOutputReference {
    return new WirelessRfProfilesItemsFlexRadiosByModelOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface WirelessRfProfilesItems {
  /**
  * Choice between `dual`, `2.4ghz`, `5ghz`, `6ghz` or `multi`. Defaults to dual.
  *   - Choices: `2.4ghz`, `5ghz`, `6ghz`, `dual`, `multi`
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/meraki/1.7.1/docs/resources/wireless_rf_profiles#ap_band_settings_band_operation_mode WirelessRfProfiles#ap_band_settings_band_operation_mode}
  */
  readonly apBandSettingsBandOperationMode?: string;
  /**
  * Steers client to most open band. Can be either true or false. Defaults to true.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/meraki/1.7.1/docs/resources/wireless_rf_profiles#ap_band_settings_band_steering_enabled WirelessRfProfiles#ap_band_settings_band_steering_enabled}
  */
  readonly apBandSettingsBandSteeringEnabled?: boolean | cdktf.IResolvable;
  /**
  * List of enabled bands. Can include ['2.4', '5', '6', 'disabled']
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/meraki/1.7.1/docs/resources/wireless_rf_profiles#ap_band_settings_bands_enabled WirelessRfProfiles#ap_band_settings_bands_enabled}
  */
  readonly apBandSettingsBandsEnabled?: string[];
  /**
  * Band selection can be set to either `ssid` or `ap`. This param is required on creation.
  *   - Choices: `ap`, `ssid`
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/meraki/1.7.1/docs/resources/wireless_rf_profiles#band_selection_type WirelessRfProfiles#band_selection_type}
  */
  readonly bandSelectionType: string;
  /**
  * Steers client to best available access point. Can be either true or false. Defaults to true.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/meraki/1.7.1/docs/resources/wireless_rf_profiles#client_balancing_enabled WirelessRfProfiles#client_balancing_enabled}
  */
  readonly clientBalancingEnabled?: boolean | cdktf.IResolvable;
  /**
  * Sets channel width (MHz) for 5Ghz band. Can be one of `auto`, `20`, `40` or `80`. Defaults to auto.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/meraki/1.7.1/docs/resources/wireless_rf_profiles#five_ghz_settings_channel_width WirelessRfProfiles#five_ghz_settings_channel_width}
  */
  readonly fiveGhzSettingsChannelWidth?: string;
  /**
  * Sets max power (dBm) of 5Ghz band. Can be integer between 2 and 30. Defaults to 30.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/meraki/1.7.1/docs/resources/wireless_rf_profiles#five_ghz_settings_max_power WirelessRfProfiles#five_ghz_settings_max_power}
  */
  readonly fiveGhzSettingsMaxPower?: number;
  /**
  * Sets min bitrate (Mbps) of 5Ghz band. Can be one of `6`, `9`, `12`, `18`, `24`, `36`, `48` or `54`. Defaults to 12.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/meraki/1.7.1/docs/resources/wireless_rf_profiles#five_ghz_settings_min_bitrate WirelessRfProfiles#five_ghz_settings_min_bitrate}
  */
  readonly fiveGhzSettingsMinBitrate?: number;
  /**
  * Sets min power (dBm) of 5Ghz band. Can be integer between 2 and 30. Defaults to 8.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/meraki/1.7.1/docs/resources/wireless_rf_profiles#five_ghz_settings_min_power WirelessRfProfiles#five_ghz_settings_min_power}
  */
  readonly fiveGhzSettingsMinPower?: number;
  /**
  * The RX-SOP level controls the sensitivity of the radio. It is strongly recommended to use RX-SOP only after consulting a wireless expert. RX-SOP can be configured in the range of -65 to -95 (dBm). A value of null will reset this to the default.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/meraki/1.7.1/docs/resources/wireless_rf_profiles#five_ghz_settings_rxsop WirelessRfProfiles#five_ghz_settings_rxsop}
  */
  readonly fiveGhzSettingsRxsop?: number;
  /**
  * Sets valid auto channels for 5Ghz band. Can be one of `36`, `40`, `44`, `48`, `52`, `56`, `60`, `64`, `100`, `104`, `108`, `112`, `116`, `120`, `124`, `128`, `132`, `136`, `140`, `144`, `149`, `153`, `157`, `161` or `165`.Defaults to [36, 40, 44, 48, 52, 56, 60, 64, 100, 104, 108, 112, 116, 120, 124, 128, 132, 136, 140, 144, 149, 153, 157, 161, 165].
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/meraki/1.7.1/docs/resources/wireless_rf_profiles#five_ghz_settings_valid_auto_channels WirelessRfProfiles#five_ghz_settings_valid_auto_channels}
  */
  readonly fiveGhzSettingsValidAutoChannels?: number[];
  /**
  * Flex radios by model.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/meraki/1.7.1/docs/resources/wireless_rf_profiles#flex_radios_by_model WirelessRfProfiles#flex_radios_by_model}
  */
  readonly flexRadiosByModel?: WirelessRfProfilesItemsFlexRadiosByModel[] | cdktf.IResolvable;
  /**
  * Set this profile as the default indoor rf profile. If the profile ID is one of `indoor` or `outdoor`, then a new profile will be created from the respective ID and set as the default
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/meraki/1.7.1/docs/resources/wireless_rf_profiles#is_indoor_default WirelessRfProfiles#is_indoor_default}
  */
  readonly isIndoorDefault?: boolean | cdktf.IResolvable;
  /**
  * Set this profile as the default outdoor rf profile. If the profile ID is one of `indoor` or `outdoor`, then a new profile will be created from the respective ID and set as the default
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/meraki/1.7.1/docs/resources/wireless_rf_profiles#is_outdoor_default WirelessRfProfiles#is_outdoor_default}
  */
  readonly isOutdoorDefault?: boolean | cdktf.IResolvable;
  /**
  * Minimum bitrate can be set to either `band` or `ssid`. Defaults to band.
  *   - Choices: `band`, `ssid`
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/meraki/1.7.1/docs/resources/wireless_rf_profiles#min_bitrate_type WirelessRfProfiles#min_bitrate_type}
  */
  readonly minBitrateType?: string;
  /**
  * The name of the new profile. Must be unique. This param is required on creation.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/meraki/1.7.1/docs/resources/wireless_rf_profiles#name WirelessRfProfiles#name}
  */
  readonly name: string;
  /**
  * Choice between `dual`, `2.4ghz`, `5ghz`, `6ghz` or `multi`.
  *   - Choices: `2.4ghz`, `5ghz`, `6ghz`, `dual`, `multi`
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/meraki/1.7.1/docs/resources/wireless_rf_profiles#per_ssid_settings_0_band_operation_mode WirelessRfProfiles#per_ssid_settings_0_band_operation_mode}
  */
  readonly perSsidSettings0BandOperationMode?: string;
  /**
  * Steers client to most open band between 2.4 GHz and 5 GHz. Can be either true or false.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/meraki/1.7.1/docs/resources/wireless_rf_profiles#per_ssid_settings_0_band_steering_enabled WirelessRfProfiles#per_ssid_settings_0_band_steering_enabled}
  */
  readonly perSsidSettings0BandSteeringEnabled?: boolean | cdktf.IResolvable;
  /**
  * List of enabled bands. Can include ['2.4', '5', '6', 'disabled']
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/meraki/1.7.1/docs/resources/wireless_rf_profiles#per_ssid_settings_0_bands_enabled WirelessRfProfiles#per_ssid_settings_0_bands_enabled}
  */
  readonly perSsidSettings0BandsEnabled?: string[];
  /**
  * Sets min bitrate (Mbps) of this SSID. Can be one of `1`, `2`, `5.5`, `6`, `9`, `11`, `12`, `18`, `24`, `36`, `48` or `54`.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/meraki/1.7.1/docs/resources/wireless_rf_profiles#per_ssid_settings_0_min_bitrate WirelessRfProfiles#per_ssid_settings_0_min_bitrate}
  */
  readonly perSsidSettings0MinBitrate?: number;
  /**
  * Choice between `dual`, `2.4ghz`, `5ghz`, `6ghz` or `multi`.
  *   - Choices: `2.4ghz`, `5ghz`, `6ghz`, `dual`, `multi`
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/meraki/1.7.1/docs/resources/wireless_rf_profiles#per_ssid_settings_10_band_operation_mode WirelessRfProfiles#per_ssid_settings_10_band_operation_mode}
  */
  readonly perSsidSettings10BandOperationMode?: string;
  /**
  * Steers client to most open band between 2.4 GHz and 5 GHz. Can be either true or false.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/meraki/1.7.1/docs/resources/wireless_rf_profiles#per_ssid_settings_10_band_steering_enabled WirelessRfProfiles#per_ssid_settings_10_band_steering_enabled}
  */
  readonly perSsidSettings10BandSteeringEnabled?: boolean | cdktf.IResolvable;
  /**
  * List of enabled bands. Can include ['2.4', '5', '6', 'disabled']
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/meraki/1.7.1/docs/resources/wireless_rf_profiles#per_ssid_settings_10_bands_enabled WirelessRfProfiles#per_ssid_settings_10_bands_enabled}
  */
  readonly perSsidSettings10BandsEnabled?: string[];
  /**
  * Sets min bitrate (Mbps) of this SSID. Can be one of `1`, `2`, `5.5`, `6`, `9`, `11`, `12`, `18`, `24`, `36`, `48` or `54`.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/meraki/1.7.1/docs/resources/wireless_rf_profiles#per_ssid_settings_10_min_bitrate WirelessRfProfiles#per_ssid_settings_10_min_bitrate}
  */
  readonly perSsidSettings10MinBitrate?: number;
  /**
  * Choice between `dual`, `2.4ghz`, `5ghz`, `6ghz` or `multi`.
  *   - Choices: `2.4ghz`, `5ghz`, `6ghz`, `dual`, `multi`
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/meraki/1.7.1/docs/resources/wireless_rf_profiles#per_ssid_settings_11_band_operation_mode WirelessRfProfiles#per_ssid_settings_11_band_operation_mode}
  */
  readonly perSsidSettings11BandOperationMode?: string;
  /**
  * Steers client to most open band between 2.4 GHz and 5 GHz. Can be either true or false.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/meraki/1.7.1/docs/resources/wireless_rf_profiles#per_ssid_settings_11_band_steering_enabled WirelessRfProfiles#per_ssid_settings_11_band_steering_enabled}
  */
  readonly perSsidSettings11BandSteeringEnabled?: boolean | cdktf.IResolvable;
  /**
  * List of enabled bands. Can include ['2.4', '5', '6', 'disabled']
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/meraki/1.7.1/docs/resources/wireless_rf_profiles#per_ssid_settings_11_bands_enabled WirelessRfProfiles#per_ssid_settings_11_bands_enabled}
  */
  readonly perSsidSettings11BandsEnabled?: string[];
  /**
  * Sets min bitrate (Mbps) of this SSID. Can be one of `1`, `2`, `5.5`, `6`, `9`, `11`, `12`, `18`, `24`, `36`, `48` or `54`.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/meraki/1.7.1/docs/resources/wireless_rf_profiles#per_ssid_settings_11_min_bitrate WirelessRfProfiles#per_ssid_settings_11_min_bitrate}
  */
  readonly perSsidSettings11MinBitrate?: number;
  /**
  * Choice between `dual`, `2.4ghz`, `5ghz`, `6ghz` or `multi`.
  *   - Choices: `2.4ghz`, `5ghz`, `6ghz`, `dual`, `multi`
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/meraki/1.7.1/docs/resources/wireless_rf_profiles#per_ssid_settings_12_band_operation_mode WirelessRfProfiles#per_ssid_settings_12_band_operation_mode}
  */
  readonly perSsidSettings12BandOperationMode?: string;
  /**
  * Steers client to most open band between 2.4 GHz and 5 GHz. Can be either true or false.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/meraki/1.7.1/docs/resources/wireless_rf_profiles#per_ssid_settings_12_band_steering_enabled WirelessRfProfiles#per_ssid_settings_12_band_steering_enabled}
  */
  readonly perSsidSettings12BandSteeringEnabled?: boolean | cdktf.IResolvable;
  /**
  * List of enabled bands. Can include ['2.4', '5', '6', 'disabled']
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/meraki/1.7.1/docs/resources/wireless_rf_profiles#per_ssid_settings_12_bands_enabled WirelessRfProfiles#per_ssid_settings_12_bands_enabled}
  */
  readonly perSsidSettings12BandsEnabled?: string[];
  /**
  * Sets min bitrate (Mbps) of this SSID. Can be one of `1`, `2`, `5.5`, `6`, `9`, `11`, `12`, `18`, `24`, `36`, `48` or `54`.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/meraki/1.7.1/docs/resources/wireless_rf_profiles#per_ssid_settings_12_min_bitrate WirelessRfProfiles#per_ssid_settings_12_min_bitrate}
  */
  readonly perSsidSettings12MinBitrate?: number;
  /**
  * Choice between `dual`, `2.4ghz`, `5ghz`, `6ghz` or `multi`.
  *   - Choices: `2.4ghz`, `5ghz`, `6ghz`, `dual`, `multi`
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/meraki/1.7.1/docs/resources/wireless_rf_profiles#per_ssid_settings_13_band_operation_mode WirelessRfProfiles#per_ssid_settings_13_band_operation_mode}
  */
  readonly perSsidSettings13BandOperationMode?: string;
  /**
  * Steers client to most open band between 2.4 GHz and 5 GHz. Can be either true or false.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/meraki/1.7.1/docs/resources/wireless_rf_profiles#per_ssid_settings_13_band_steering_enabled WirelessRfProfiles#per_ssid_settings_13_band_steering_enabled}
  */
  readonly perSsidSettings13BandSteeringEnabled?: boolean | cdktf.IResolvable;
  /**
  * List of enabled bands. Can include ['2.4', '5', '6', 'disabled']
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/meraki/1.7.1/docs/resources/wireless_rf_profiles#per_ssid_settings_13_bands_enabled WirelessRfProfiles#per_ssid_settings_13_bands_enabled}
  */
  readonly perSsidSettings13BandsEnabled?: string[];
  /**
  * Sets min bitrate (Mbps) of this SSID. Can be one of `1`, `2`, `5.5`, `6`, `9`, `11`, `12`, `18`, `24`, `36`, `48` or `54`.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/meraki/1.7.1/docs/resources/wireless_rf_profiles#per_ssid_settings_13_min_bitrate WirelessRfProfiles#per_ssid_settings_13_min_bitrate}
  */
  readonly perSsidSettings13MinBitrate?: number;
  /**
  * Choice between `dual`, `2.4ghz`, `5ghz`, `6ghz` or `multi`.
  *   - Choices: `2.4ghz`, `5ghz`, `6ghz`, `dual`, `multi`
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/meraki/1.7.1/docs/resources/wireless_rf_profiles#per_ssid_settings_14_band_operation_mode WirelessRfProfiles#per_ssid_settings_14_band_operation_mode}
  */
  readonly perSsidSettings14BandOperationMode?: string;
  /**
  * Steers client to most open band between 2.4 GHz and 5 GHz. Can be either true or false.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/meraki/1.7.1/docs/resources/wireless_rf_profiles#per_ssid_settings_14_band_steering_enabled WirelessRfProfiles#per_ssid_settings_14_band_steering_enabled}
  */
  readonly perSsidSettings14BandSteeringEnabled?: boolean | cdktf.IResolvable;
  /**
  * List of enabled bands. Can include ['2.4', '5', '6', 'disabled']
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/meraki/1.7.1/docs/resources/wireless_rf_profiles#per_ssid_settings_14_bands_enabled WirelessRfProfiles#per_ssid_settings_14_bands_enabled}
  */
  readonly perSsidSettings14BandsEnabled?: string[];
  /**
  * Sets min bitrate (Mbps) of this SSID. Can be one of `1`, `2`, `5.5`, `6`, `9`, `11`, `12`, `18`, `24`, `36`, `48` or `54`.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/meraki/1.7.1/docs/resources/wireless_rf_profiles#per_ssid_settings_14_min_bitrate WirelessRfProfiles#per_ssid_settings_14_min_bitrate}
  */
  readonly perSsidSettings14MinBitrate?: number;
  /**
  * Choice between `dual`, `2.4ghz`, `5ghz`, `6ghz` or `multi`.
  *   - Choices: `2.4ghz`, `5ghz`, `6ghz`, `dual`, `multi`
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/meraki/1.7.1/docs/resources/wireless_rf_profiles#per_ssid_settings_1_band_operation_mode WirelessRfProfiles#per_ssid_settings_1_band_operation_mode}
  */
  readonly perSsidSettings1BandOperationMode?: string;
  /**
  * Steers client to most open band between 2.4 GHz and 5 GHz. Can be either true or false.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/meraki/1.7.1/docs/resources/wireless_rf_profiles#per_ssid_settings_1_band_steering_enabled WirelessRfProfiles#per_ssid_settings_1_band_steering_enabled}
  */
  readonly perSsidSettings1BandSteeringEnabled?: boolean | cdktf.IResolvable;
  /**
  * List of enabled bands. Can include ['2.4', '5', '6', 'disabled']
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/meraki/1.7.1/docs/resources/wireless_rf_profiles#per_ssid_settings_1_bands_enabled WirelessRfProfiles#per_ssid_settings_1_bands_enabled}
  */
  readonly perSsidSettings1BandsEnabled?: string[];
  /**
  * Sets min bitrate (Mbps) of this SSID. Can be one of `1`, `2`, `5.5`, `6`, `9`, `11`, `12`, `18`, `24`, `36`, `48` or `54`.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/meraki/1.7.1/docs/resources/wireless_rf_profiles#per_ssid_settings_1_min_bitrate WirelessRfProfiles#per_ssid_settings_1_min_bitrate}
  */
  readonly perSsidSettings1MinBitrate?: number;
  /**
  * Choice between `dual`, `2.4ghz`, `5ghz`, `6ghz` or `multi`.
  *   - Choices: `2.4ghz`, `5ghz`, `6ghz`, `dual`, `multi`
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/meraki/1.7.1/docs/resources/wireless_rf_profiles#per_ssid_settings_2_band_operation_mode WirelessRfProfiles#per_ssid_settings_2_band_operation_mode}
  */
  readonly perSsidSettings2BandOperationMode?: string;
  /**
  * Steers client to most open band between 2.4 GHz and 5 GHz. Can be either true or false.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/meraki/1.7.1/docs/resources/wireless_rf_profiles#per_ssid_settings_2_band_steering_enabled WirelessRfProfiles#per_ssid_settings_2_band_steering_enabled}
  */
  readonly perSsidSettings2BandSteeringEnabled?: boolean | cdktf.IResolvable;
  /**
  * List of enabled bands. Can include ['2.4', '5', '6', 'disabled']
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/meraki/1.7.1/docs/resources/wireless_rf_profiles#per_ssid_settings_2_bands_enabled WirelessRfProfiles#per_ssid_settings_2_bands_enabled}
  */
  readonly perSsidSettings2BandsEnabled?: string[];
  /**
  * Sets min bitrate (Mbps) of this SSID. Can be one of `1`, `2`, `5.5`, `6`, `9`, `11`, `12`, `18`, `24`, `36`, `48` or `54`.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/meraki/1.7.1/docs/resources/wireless_rf_profiles#per_ssid_settings_2_min_bitrate WirelessRfProfiles#per_ssid_settings_2_min_bitrate}
  */
  readonly perSsidSettings2MinBitrate?: number;
  /**
  * Choice between `dual`, `2.4ghz`, `5ghz`, `6ghz` or `multi`.
  *   - Choices: `2.4ghz`, `5ghz`, `6ghz`, `dual`, `multi`
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/meraki/1.7.1/docs/resources/wireless_rf_profiles#per_ssid_settings_3_band_operation_mode WirelessRfProfiles#per_ssid_settings_3_band_operation_mode}
  */
  readonly perSsidSettings3BandOperationMode?: string;
  /**
  * Steers client to most open band between 2.4 GHz and 5 GHz. Can be either true or false.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/meraki/1.7.1/docs/resources/wireless_rf_profiles#per_ssid_settings_3_band_steering_enabled WirelessRfProfiles#per_ssid_settings_3_band_steering_enabled}
  */
  readonly perSsidSettings3BandSteeringEnabled?: boolean | cdktf.IResolvable;
  /**
  * List of enabled bands. Can include ['2.4', '5', '6', 'disabled']
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/meraki/1.7.1/docs/resources/wireless_rf_profiles#per_ssid_settings_3_bands_enabled WirelessRfProfiles#per_ssid_settings_3_bands_enabled}
  */
  readonly perSsidSettings3BandsEnabled?: string[];
  /**
  * Sets min bitrate (Mbps) of this SSID. Can be one of `1`, `2`, `5.5`, `6`, `9`, `11`, `12`, `18`, `24`, `36`, `48` or `54`.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/meraki/1.7.1/docs/resources/wireless_rf_profiles#per_ssid_settings_3_min_bitrate WirelessRfProfiles#per_ssid_settings_3_min_bitrate}
  */
  readonly perSsidSettings3MinBitrate?: number;
  /**
  * Choice between `dual`, `2.4ghz`, `5ghz`, `6ghz` or `multi`.
  *   - Choices: `2.4ghz`, `5ghz`, `6ghz`, `dual`, `multi`
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/meraki/1.7.1/docs/resources/wireless_rf_profiles#per_ssid_settings_4_band_operation_mode WirelessRfProfiles#per_ssid_settings_4_band_operation_mode}
  */
  readonly perSsidSettings4BandOperationMode?: string;
  /**
  * Steers client to most open band between 2.4 GHz and 5 GHz. Can be either true or false.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/meraki/1.7.1/docs/resources/wireless_rf_profiles#per_ssid_settings_4_band_steering_enabled WirelessRfProfiles#per_ssid_settings_4_band_steering_enabled}
  */
  readonly perSsidSettings4BandSteeringEnabled?: boolean | cdktf.IResolvable;
  /**
  * List of enabled bands. Can include ['2.4', '5', '6', 'disabled']
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/meraki/1.7.1/docs/resources/wireless_rf_profiles#per_ssid_settings_4_bands_enabled WirelessRfProfiles#per_ssid_settings_4_bands_enabled}
  */
  readonly perSsidSettings4BandsEnabled?: string[];
  /**
  * Sets min bitrate (Mbps) of this SSID. Can be one of `1`, `2`, `5.5`, `6`, `9`, `11`, `12`, `18`, `24`, `36`, `48` or `54`.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/meraki/1.7.1/docs/resources/wireless_rf_profiles#per_ssid_settings_4_min_bitrate WirelessRfProfiles#per_ssid_settings_4_min_bitrate}
  */
  readonly perSsidSettings4MinBitrate?: number;
  /**
  * Choice between `dual`, `2.4ghz`, `5ghz`, `6ghz` or `multi`.
  *   - Choices: `2.4ghz`, `5ghz`, `6ghz`, `dual`, `multi`
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/meraki/1.7.1/docs/resources/wireless_rf_profiles#per_ssid_settings_5_band_operation_mode WirelessRfProfiles#per_ssid_settings_5_band_operation_mode}
  */
  readonly perSsidSettings5BandOperationMode?: string;
  /**
  * Steers client to most open band between 2.4 GHz and 5 GHz. Can be either true or false.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/meraki/1.7.1/docs/resources/wireless_rf_profiles#per_ssid_settings_5_band_steering_enabled WirelessRfProfiles#per_ssid_settings_5_band_steering_enabled}
  */
  readonly perSsidSettings5BandSteeringEnabled?: boolean | cdktf.IResolvable;
  /**
  * List of enabled bands. Can include ['2.4', '5', '6', 'disabled']
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/meraki/1.7.1/docs/resources/wireless_rf_profiles#per_ssid_settings_5_bands_enabled WirelessRfProfiles#per_ssid_settings_5_bands_enabled}
  */
  readonly perSsidSettings5BandsEnabled?: string[];
  /**
  * Sets min bitrate (Mbps) of this SSID. Can be one of `1`, `2`, `5.5`, `6`, `9`, `11`, `12`, `18`, `24`, `36`, `48` or `54`.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/meraki/1.7.1/docs/resources/wireless_rf_profiles#per_ssid_settings_5_min_bitrate WirelessRfProfiles#per_ssid_settings_5_min_bitrate}
  */
  readonly perSsidSettings5MinBitrate?: number;
  /**
  * Choice between `dual`, `2.4ghz`, `5ghz`, `6ghz` or `multi`.
  *   - Choices: `2.4ghz`, `5ghz`, `6ghz`, `dual`, `multi`
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/meraki/1.7.1/docs/resources/wireless_rf_profiles#per_ssid_settings_6_band_operation_mode WirelessRfProfiles#per_ssid_settings_6_band_operation_mode}
  */
  readonly perSsidSettings6BandOperationMode?: string;
  /**
  * Steers client to most open band between 2.4 GHz and 5 GHz. Can be either true or false.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/meraki/1.7.1/docs/resources/wireless_rf_profiles#per_ssid_settings_6_band_steering_enabled WirelessRfProfiles#per_ssid_settings_6_band_steering_enabled}
  */
  readonly perSsidSettings6BandSteeringEnabled?: boolean | cdktf.IResolvable;
  /**
  * List of enabled bands. Can include ['2.4', '5', '6', 'disabled']
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/meraki/1.7.1/docs/resources/wireless_rf_profiles#per_ssid_settings_6_bands_enabled WirelessRfProfiles#per_ssid_settings_6_bands_enabled}
  */
  readonly perSsidSettings6BandsEnabled?: string[];
  /**
  * Sets min bitrate (Mbps) of this SSID. Can be one of `1`, `2`, `5.5`, `6`, `9`, `11`, `12`, `18`, `24`, `36`, `48` or `54`.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/meraki/1.7.1/docs/resources/wireless_rf_profiles#per_ssid_settings_6_min_bitrate WirelessRfProfiles#per_ssid_settings_6_min_bitrate}
  */
  readonly perSsidSettings6MinBitrate?: number;
  /**
  * Choice between `dual`, `2.4ghz`, `5ghz`, `6ghz` or `multi`.
  *   - Choices: `2.4ghz`, `5ghz`, `6ghz`, `dual`, `multi`
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/meraki/1.7.1/docs/resources/wireless_rf_profiles#per_ssid_settings_7_band_operation_mode WirelessRfProfiles#per_ssid_settings_7_band_operation_mode}
  */
  readonly perSsidSettings7BandOperationMode?: string;
  /**
  * Steers client to most open band between 2.4 GHz and 5 GHz. Can be either true or false.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/meraki/1.7.1/docs/resources/wireless_rf_profiles#per_ssid_settings_7_band_steering_enabled WirelessRfProfiles#per_ssid_settings_7_band_steering_enabled}
  */
  readonly perSsidSettings7BandSteeringEnabled?: boolean | cdktf.IResolvable;
  /**
  * List of enabled bands. Can include ['2.4', '5', '6', 'disabled']
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/meraki/1.7.1/docs/resources/wireless_rf_profiles#per_ssid_settings_7_bands_enabled WirelessRfProfiles#per_ssid_settings_7_bands_enabled}
  */
  readonly perSsidSettings7BandsEnabled?: string[];
  /**
  * Sets min bitrate (Mbps) of this SSID. Can be one of `1`, `2`, `5.5`, `6`, `9`, `11`, `12`, `18`, `24`, `36`, `48` or `54`.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/meraki/1.7.1/docs/resources/wireless_rf_profiles#per_ssid_settings_7_min_bitrate WirelessRfProfiles#per_ssid_settings_7_min_bitrate}
  */
  readonly perSsidSettings7MinBitrate?: number;
  /**
  * Choice between `dual`, `2.4ghz`, `5ghz`, `6ghz` or `multi`.
  *   - Choices: `2.4ghz`, `5ghz`, `6ghz`, `dual`, `multi`
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/meraki/1.7.1/docs/resources/wireless_rf_profiles#per_ssid_settings_8_band_operation_mode WirelessRfProfiles#per_ssid_settings_8_band_operation_mode}
  */
  readonly perSsidSettings8BandOperationMode?: string;
  /**
  * Steers client to most open band between 2.4 GHz and 5 GHz. Can be either true or false.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/meraki/1.7.1/docs/resources/wireless_rf_profiles#per_ssid_settings_8_band_steering_enabled WirelessRfProfiles#per_ssid_settings_8_band_steering_enabled}
  */
  readonly perSsidSettings8BandSteeringEnabled?: boolean | cdktf.IResolvable;
  /**
  * List of enabled bands. Can include ['2.4', '5', '6', 'disabled']
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/meraki/1.7.1/docs/resources/wireless_rf_profiles#per_ssid_settings_8_bands_enabled WirelessRfProfiles#per_ssid_settings_8_bands_enabled}
  */
  readonly perSsidSettings8BandsEnabled?: string[];
  /**
  * Sets min bitrate (Mbps) of this SSID. Can be one of `1`, `2`, `5.5`, `6`, `9`, `11`, `12`, `18`, `24`, `36`, `48` or `54`.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/meraki/1.7.1/docs/resources/wireless_rf_profiles#per_ssid_settings_8_min_bitrate WirelessRfProfiles#per_ssid_settings_8_min_bitrate}
  */
  readonly perSsidSettings8MinBitrate?: number;
  /**
  * Choice between `dual`, `2.4ghz`, `5ghz`, `6ghz` or `multi`.
  *   - Choices: `2.4ghz`, `5ghz`, `6ghz`, `dual`, `multi`
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/meraki/1.7.1/docs/resources/wireless_rf_profiles#per_ssid_settings_9_band_operation_mode WirelessRfProfiles#per_ssid_settings_9_band_operation_mode}
  */
  readonly perSsidSettings9BandOperationMode?: string;
  /**
  * Steers client to most open band between 2.4 GHz and 5 GHz. Can be either true or false.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/meraki/1.7.1/docs/resources/wireless_rf_profiles#per_ssid_settings_9_band_steering_enabled WirelessRfProfiles#per_ssid_settings_9_band_steering_enabled}
  */
  readonly perSsidSettings9BandSteeringEnabled?: boolean | cdktf.IResolvable;
  /**
  * List of enabled bands. Can include ['2.4', '5', '6', 'disabled']
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/meraki/1.7.1/docs/resources/wireless_rf_profiles#per_ssid_settings_9_bands_enabled WirelessRfProfiles#per_ssid_settings_9_bands_enabled}
  */
  readonly perSsidSettings9BandsEnabled?: string[];
  /**
  * Sets min bitrate (Mbps) of this SSID. Can be one of `1`, `2`, `5.5`, `6`, `9`, `11`, `12`, `18`, `24`, `36`, `48` or `54`.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/meraki/1.7.1/docs/resources/wireless_rf_profiles#per_ssid_settings_9_min_bitrate WirelessRfProfiles#per_ssid_settings_9_min_bitrate}
  */
  readonly perSsidSettings9MinBitrate?: number;
  /**
  * Sets channel width (MHz) for 6Ghz band. Can be one of `0`, `20`, `40`, `80` or `160`. Defaults to 0.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/meraki/1.7.1/docs/resources/wireless_rf_profiles#six_ghz_settings_channel_width WirelessRfProfiles#six_ghz_settings_channel_width}
  */
  readonly sixGhzSettingsChannelWidth?: string;
  /**
  * Sets max power (dBm) of 6Ghz band. Can be integer between 2 and 30. Defaults to 30.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/meraki/1.7.1/docs/resources/wireless_rf_profiles#six_ghz_settings_max_power WirelessRfProfiles#six_ghz_settings_max_power}
  */
  readonly sixGhzSettingsMaxPower?: number;
  /**
  * Sets min bitrate (Mbps) of 6Ghz band. Can be one of `6`, `9`, `12`, `18`, `24`, `36`, `48` or `54`. Defaults to 12.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/meraki/1.7.1/docs/resources/wireless_rf_profiles#six_ghz_settings_min_bitrate WirelessRfProfiles#six_ghz_settings_min_bitrate}
  */
  readonly sixGhzSettingsMinBitrate?: number;
  /**
  * Sets min power (dBm) of 6Ghz band. Can be integer between 2 and 30. Defaults to 8.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/meraki/1.7.1/docs/resources/wireless_rf_profiles#six_ghz_settings_min_power WirelessRfProfiles#six_ghz_settings_min_power}
  */
  readonly sixGhzSettingsMinPower?: number;
  /**
  * The RX-SOP level controls the sensitivity of the radio. It is strongly recommended to use RX-SOP only after consulting a wireless expert. RX-SOP can be configured in the range of -65 to -95 (dBm). A value of null will reset this to the default.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/meraki/1.7.1/docs/resources/wireless_rf_profiles#six_ghz_settings_rxsop WirelessRfProfiles#six_ghz_settings_rxsop}
  */
  readonly sixGhzSettingsRxsop?: number;
  /**
  * Sets valid auto channels for 6Ghz band. Can be one of `1`, `5`, `9`, `13`, `17`, `21`, `25`, `29`, `33`, `37`, `41`, `45`, `49`, `53`, `57`, `61`, `65`, `69`, `73`, `77`, `81`, `85`, `89`, `93`, `97`, `101`, `105`, `109`, `113`, `117`, `121`, `125`, `129`, `133`, `137`, `141`, `145`, `149`, `153`, `157`, `161`, `165`, `169`, `173`, `177`, `181`, `185`, `189`, `193`, `197`, `201`, `205`, `209`, `213`, `217`, `221`, `225`, `229` or `233`.Defaults to [1, 5, 9, 13, 17, 21, 25, 29, 33, 37, 41, 45, 49, 53, 57, 61, 65, 69, 73, 77, 81, 85, 89, 93, 97, 101, 105, 109, 113, 117, 121, 125, 129, 133, 137, 141, 145, 149, 153, 157, 161, 165, 169, 173, 177, 181, 185, 189, 193, 197, 201, 205, 209, 213, 217, 221, 225, 229, 233].
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/meraki/1.7.1/docs/resources/wireless_rf_profiles#six_ghz_settings_valid_auto_channels WirelessRfProfiles#six_ghz_settings_valid_auto_channels}
  */
  readonly sixGhzSettingsValidAutoChannels?: number[];
  /**
  * Toggle for radio transmission. When false, radios will not transmit at all.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/meraki/1.7.1/docs/resources/wireless_rf_profiles#transmission_enabled WirelessRfProfiles#transmission_enabled}
  */
  readonly transmissionEnabled?: boolean | cdktf.IResolvable;
  /**
  * Determines whether ax radio on 2.4Ghz band is on or off. Can be either true or false. If false, we highly recommend disabling band steering. Defaults to true.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/meraki/1.7.1/docs/resources/wireless_rf_profiles#two_four_ghz_settings_ax_enabled WirelessRfProfiles#two_four_ghz_settings_ax_enabled}
  */
  readonly twoFourGhzSettingsAxEnabled?: boolean | cdktf.IResolvable;
  /**
  * Sets max power (dBm) of 2.4Ghz band. Can be integer between 2 and 30. Defaults to 30.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/meraki/1.7.1/docs/resources/wireless_rf_profiles#two_four_ghz_settings_max_power WirelessRfProfiles#two_four_ghz_settings_max_power}
  */
  readonly twoFourGhzSettingsMaxPower?: number;
  /**
  * Sets min bitrate (Mbps) of 2.4Ghz band. Can be one of `1`, `2`, `5.5`, `6`, `9`, `11`, `12`, `18`, `24`, `36`, `48` or `54`. Defaults to 11.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/meraki/1.7.1/docs/resources/wireless_rf_profiles#two_four_ghz_settings_min_bitrate WirelessRfProfiles#two_four_ghz_settings_min_bitrate}
  */
  readonly twoFourGhzSettingsMinBitrate?: number;
  /**
  * Sets min power (dBm) of 2.4Ghz band. Can be integer between 2 and 30. Defaults to 5.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/meraki/1.7.1/docs/resources/wireless_rf_profiles#two_four_ghz_settings_min_power WirelessRfProfiles#two_four_ghz_settings_min_power}
  */
  readonly twoFourGhzSettingsMinPower?: number;
  /**
  * The RX-SOP level controls the sensitivity of the radio. It is strongly recommended to use RX-SOP only after consulting a wireless expert. RX-SOP can be configured in the range of -65 to -95 (dBm). A value of null will reset this to the default.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/meraki/1.7.1/docs/resources/wireless_rf_profiles#two_four_ghz_settings_rxsop WirelessRfProfiles#two_four_ghz_settings_rxsop}
  */
  readonly twoFourGhzSettingsRxsop?: number;
  /**
  * Sets valid auto channels for 2.4Ghz band. Can be one of `1`, `6` or `11`. Defaults to [1, 6, 11].
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/meraki/1.7.1/docs/resources/wireless_rf_profiles#two_four_ghz_settings_valid_auto_channels WirelessRfProfiles#two_four_ghz_settings_valid_auto_channels}
  */
  readonly twoFourGhzSettingsValidAutoChannels?: number[];
}

export function wirelessRfProfilesItemsToTerraform(struct?: WirelessRfProfilesItems | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    ap_band_settings_band_operation_mode: cdktf.stringToTerraform(struct!.apBandSettingsBandOperationMode),
    ap_band_settings_band_steering_enabled: cdktf.booleanToTerraform(struct!.apBandSettingsBandSteeringEnabled),
    ap_band_settings_bands_enabled: cdktf.listMapper(cdktf.stringToTerraform, false)(struct!.apBandSettingsBandsEnabled),
    band_selection_type: cdktf.stringToTerraform(struct!.bandSelectionType),
    client_balancing_enabled: cdktf.booleanToTerraform(struct!.clientBalancingEnabled),
    five_ghz_settings_channel_width: cdktf.stringToTerraform(struct!.fiveGhzSettingsChannelWidth),
    five_ghz_settings_max_power: cdktf.numberToTerraform(struct!.fiveGhzSettingsMaxPower),
    five_ghz_settings_min_bitrate: cdktf.numberToTerraform(struct!.fiveGhzSettingsMinBitrate),
    five_ghz_settings_min_power: cdktf.numberToTerraform(struct!.fiveGhzSettingsMinPower),
    five_ghz_settings_rxsop: cdktf.numberToTerraform(struct!.fiveGhzSettingsRxsop),
    five_ghz_settings_valid_auto_channels: cdktf.listMapper(cdktf.numberToTerraform, false)(struct!.fiveGhzSettingsValidAutoChannels),
    flex_radios_by_model: cdktf.listMapper(wirelessRfProfilesItemsFlexRadiosByModelToTerraform, false)(struct!.flexRadiosByModel),
    is_indoor_default: cdktf.booleanToTerraform(struct!.isIndoorDefault),
    is_outdoor_default: cdktf.booleanToTerraform(struct!.isOutdoorDefault),
    min_bitrate_type: cdktf.stringToTerraform(struct!.minBitrateType),
    name: cdktf.stringToTerraform(struct!.name),
    per_ssid_settings_0_band_operation_mode: cdktf.stringToTerraform(struct!.perSsidSettings0BandOperationMode),
    per_ssid_settings_0_band_steering_enabled: cdktf.booleanToTerraform(struct!.perSsidSettings0BandSteeringEnabled),
    per_ssid_settings_0_bands_enabled: cdktf.listMapper(cdktf.stringToTerraform, false)(struct!.perSsidSettings0BandsEnabled),
    per_ssid_settings_0_min_bitrate: cdktf.numberToTerraform(struct!.perSsidSettings0MinBitrate),
    per_ssid_settings_10_band_operation_mode: cdktf.stringToTerraform(struct!.perSsidSettings10BandOperationMode),
    per_ssid_settings_10_band_steering_enabled: cdktf.booleanToTerraform(struct!.perSsidSettings10BandSteeringEnabled),
    per_ssid_settings_10_bands_enabled: cdktf.listMapper(cdktf.stringToTerraform, false)(struct!.perSsidSettings10BandsEnabled),
    per_ssid_settings_10_min_bitrate: cdktf.numberToTerraform(struct!.perSsidSettings10MinBitrate),
    per_ssid_settings_11_band_operation_mode: cdktf.stringToTerraform(struct!.perSsidSettings11BandOperationMode),
    per_ssid_settings_11_band_steering_enabled: cdktf.booleanToTerraform(struct!.perSsidSettings11BandSteeringEnabled),
    per_ssid_settings_11_bands_enabled: cdktf.listMapper(cdktf.stringToTerraform, false)(struct!.perSsidSettings11BandsEnabled),
    per_ssid_settings_11_min_bitrate: cdktf.numberToTerraform(struct!.perSsidSettings11MinBitrate),
    per_ssid_settings_12_band_operation_mode: cdktf.stringToTerraform(struct!.perSsidSettings12BandOperationMode),
    per_ssid_settings_12_band_steering_enabled: cdktf.booleanToTerraform(struct!.perSsidSettings12BandSteeringEnabled),
    per_ssid_settings_12_bands_enabled: cdktf.listMapper(cdktf.stringToTerraform, false)(struct!.perSsidSettings12BandsEnabled),
    per_ssid_settings_12_min_bitrate: cdktf.numberToTerraform(struct!.perSsidSettings12MinBitrate),
    per_ssid_settings_13_band_operation_mode: cdktf.stringToTerraform(struct!.perSsidSettings13BandOperationMode),
    per_ssid_settings_13_band_steering_enabled: cdktf.booleanToTerraform(struct!.perSsidSettings13BandSteeringEnabled),
    per_ssid_settings_13_bands_enabled: cdktf.listMapper(cdktf.stringToTerraform, false)(struct!.perSsidSettings13BandsEnabled),
    per_ssid_settings_13_min_bitrate: cdktf.numberToTerraform(struct!.perSsidSettings13MinBitrate),
    per_ssid_settings_14_band_operation_mode: cdktf.stringToTerraform(struct!.perSsidSettings14BandOperationMode),
    per_ssid_settings_14_band_steering_enabled: cdktf.booleanToTerraform(struct!.perSsidSettings14BandSteeringEnabled),
    per_ssid_settings_14_bands_enabled: cdktf.listMapper(cdktf.stringToTerraform, false)(struct!.perSsidSettings14BandsEnabled),
    per_ssid_settings_14_min_bitrate: cdktf.numberToTerraform(struct!.perSsidSettings14MinBitrate),
    per_ssid_settings_1_band_operation_mode: cdktf.stringToTerraform(struct!.perSsidSettings1BandOperationMode),
    per_ssid_settings_1_band_steering_enabled: cdktf.booleanToTerraform(struct!.perSsidSettings1BandSteeringEnabled),
    per_ssid_settings_1_bands_enabled: cdktf.listMapper(cdktf.stringToTerraform, false)(struct!.perSsidSettings1BandsEnabled),
    per_ssid_settings_1_min_bitrate: cdktf.numberToTerraform(struct!.perSsidSettings1MinBitrate),
    per_ssid_settings_2_band_operation_mode: cdktf.stringToTerraform(struct!.perSsidSettings2BandOperationMode),
    per_ssid_settings_2_band_steering_enabled: cdktf.booleanToTerraform(struct!.perSsidSettings2BandSteeringEnabled),
    per_ssid_settings_2_bands_enabled: cdktf.listMapper(cdktf.stringToTerraform, false)(struct!.perSsidSettings2BandsEnabled),
    per_ssid_settings_2_min_bitrate: cdktf.numberToTerraform(struct!.perSsidSettings2MinBitrate),
    per_ssid_settings_3_band_operation_mode: cdktf.stringToTerraform(struct!.perSsidSettings3BandOperationMode),
    per_ssid_settings_3_band_steering_enabled: cdktf.booleanToTerraform(struct!.perSsidSettings3BandSteeringEnabled),
    per_ssid_settings_3_bands_enabled: cdktf.listMapper(cdktf.stringToTerraform, false)(struct!.perSsidSettings3BandsEnabled),
    per_ssid_settings_3_min_bitrate: cdktf.numberToTerraform(struct!.perSsidSettings3MinBitrate),
    per_ssid_settings_4_band_operation_mode: cdktf.stringToTerraform(struct!.perSsidSettings4BandOperationMode),
    per_ssid_settings_4_band_steering_enabled: cdktf.booleanToTerraform(struct!.perSsidSettings4BandSteeringEnabled),
    per_ssid_settings_4_bands_enabled: cdktf.listMapper(cdktf.stringToTerraform, false)(struct!.perSsidSettings4BandsEnabled),
    per_ssid_settings_4_min_bitrate: cdktf.numberToTerraform(struct!.perSsidSettings4MinBitrate),
    per_ssid_settings_5_band_operation_mode: cdktf.stringToTerraform(struct!.perSsidSettings5BandOperationMode),
    per_ssid_settings_5_band_steering_enabled: cdktf.booleanToTerraform(struct!.perSsidSettings5BandSteeringEnabled),
    per_ssid_settings_5_bands_enabled: cdktf.listMapper(cdktf.stringToTerraform, false)(struct!.perSsidSettings5BandsEnabled),
    per_ssid_settings_5_min_bitrate: cdktf.numberToTerraform(struct!.perSsidSettings5MinBitrate),
    per_ssid_settings_6_band_operation_mode: cdktf.stringToTerraform(struct!.perSsidSettings6BandOperationMode),
    per_ssid_settings_6_band_steering_enabled: cdktf.booleanToTerraform(struct!.perSsidSettings6BandSteeringEnabled),
    per_ssid_settings_6_bands_enabled: cdktf.listMapper(cdktf.stringToTerraform, false)(struct!.perSsidSettings6BandsEnabled),
    per_ssid_settings_6_min_bitrate: cdktf.numberToTerraform(struct!.perSsidSettings6MinBitrate),
    per_ssid_settings_7_band_operation_mode: cdktf.stringToTerraform(struct!.perSsidSettings7BandOperationMode),
    per_ssid_settings_7_band_steering_enabled: cdktf.booleanToTerraform(struct!.perSsidSettings7BandSteeringEnabled),
    per_ssid_settings_7_bands_enabled: cdktf.listMapper(cdktf.stringToTerraform, false)(struct!.perSsidSettings7BandsEnabled),
    per_ssid_settings_7_min_bitrate: cdktf.numberToTerraform(struct!.perSsidSettings7MinBitrate),
    per_ssid_settings_8_band_operation_mode: cdktf.stringToTerraform(struct!.perSsidSettings8BandOperationMode),
    per_ssid_settings_8_band_steering_enabled: cdktf.booleanToTerraform(struct!.perSsidSettings8BandSteeringEnabled),
    per_ssid_settings_8_bands_enabled: cdktf.listMapper(cdktf.stringToTerraform, false)(struct!.perSsidSettings8BandsEnabled),
    per_ssid_settings_8_min_bitrate: cdktf.numberToTerraform(struct!.perSsidSettings8MinBitrate),
    per_ssid_settings_9_band_operation_mode: cdktf.stringToTerraform(struct!.perSsidSettings9BandOperationMode),
    per_ssid_settings_9_band_steering_enabled: cdktf.booleanToTerraform(struct!.perSsidSettings9BandSteeringEnabled),
    per_ssid_settings_9_bands_enabled: cdktf.listMapper(cdktf.stringToTerraform, false)(struct!.perSsidSettings9BandsEnabled),
    per_ssid_settings_9_min_bitrate: cdktf.numberToTerraform(struct!.perSsidSettings9MinBitrate),
    six_ghz_settings_channel_width: cdktf.stringToTerraform(struct!.sixGhzSettingsChannelWidth),
    six_ghz_settings_max_power: cdktf.numberToTerraform(struct!.sixGhzSettingsMaxPower),
    six_ghz_settings_min_bitrate: cdktf.numberToTerraform(struct!.sixGhzSettingsMinBitrate),
    six_ghz_settings_min_power: cdktf.numberToTerraform(struct!.sixGhzSettingsMinPower),
    six_ghz_settings_rxsop: cdktf.numberToTerraform(struct!.sixGhzSettingsRxsop),
    six_ghz_settings_valid_auto_channels: cdktf.listMapper(cdktf.numberToTerraform, false)(struct!.sixGhzSettingsValidAutoChannels),
    transmission_enabled: cdktf.booleanToTerraform(struct!.transmissionEnabled),
    two_four_ghz_settings_ax_enabled: cdktf.booleanToTerraform(struct!.twoFourGhzSettingsAxEnabled),
    two_four_ghz_settings_max_power: cdktf.numberToTerraform(struct!.twoFourGhzSettingsMaxPower),
    two_four_ghz_settings_min_bitrate: cdktf.numberToTerraform(struct!.twoFourGhzSettingsMinBitrate),
    two_four_ghz_settings_min_power: cdktf.numberToTerraform(struct!.twoFourGhzSettingsMinPower),
    two_four_ghz_settings_rxsop: cdktf.numberToTerraform(struct!.twoFourGhzSettingsRxsop),
    two_four_ghz_settings_valid_auto_channels: cdktf.listMapper(cdktf.numberToTerraform, false)(struct!.twoFourGhzSettingsValidAutoChannels),
  }
}


export function wirelessRfProfilesItemsToHclTerraform(struct?: WirelessRfProfilesItems | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    ap_band_settings_band_operation_mode: {
      value: cdktf.stringToHclTerraform(struct!.apBandSettingsBandOperationMode),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    ap_band_settings_band_steering_enabled: {
      value: cdktf.booleanToHclTerraform(struct!.apBandSettingsBandSteeringEnabled),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    ap_band_settings_bands_enabled: {
      value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(struct!.apBandSettingsBandsEnabled),
      isBlock: false,
      type: "set",
      storageClassType: "stringList",
    },
    band_selection_type: {
      value: cdktf.stringToHclTerraform(struct!.bandSelectionType),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    client_balancing_enabled: {
      value: cdktf.booleanToHclTerraform(struct!.clientBalancingEnabled),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    five_ghz_settings_channel_width: {
      value: cdktf.stringToHclTerraform(struct!.fiveGhzSettingsChannelWidth),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    five_ghz_settings_max_power: {
      value: cdktf.numberToHclTerraform(struct!.fiveGhzSettingsMaxPower),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    five_ghz_settings_min_bitrate: {
      value: cdktf.numberToHclTerraform(struct!.fiveGhzSettingsMinBitrate),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    five_ghz_settings_min_power: {
      value: cdktf.numberToHclTerraform(struct!.fiveGhzSettingsMinPower),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    five_ghz_settings_rxsop: {
      value: cdktf.numberToHclTerraform(struct!.fiveGhzSettingsRxsop),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    five_ghz_settings_valid_auto_channels: {
      value: cdktf.listMapperHcl(cdktf.numberToHclTerraform, false)(struct!.fiveGhzSettingsValidAutoChannels),
      isBlock: false,
      type: "set",
      storageClassType: "numberList",
    },
    flex_radios_by_model: {
      value: cdktf.listMapperHcl(wirelessRfProfilesItemsFlexRadiosByModelToHclTerraform, false)(struct!.flexRadiosByModel),
      isBlock: true,
      type: "list",
      storageClassType: "WirelessRfProfilesItemsFlexRadiosByModelList",
    },
    is_indoor_default: {
      value: cdktf.booleanToHclTerraform(struct!.isIndoorDefault),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    is_outdoor_default: {
      value: cdktf.booleanToHclTerraform(struct!.isOutdoorDefault),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    min_bitrate_type: {
      value: cdktf.stringToHclTerraform(struct!.minBitrateType),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    name: {
      value: cdktf.stringToHclTerraform(struct!.name),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    per_ssid_settings_0_band_operation_mode: {
      value: cdktf.stringToHclTerraform(struct!.perSsidSettings0BandOperationMode),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    per_ssid_settings_0_band_steering_enabled: {
      value: cdktf.booleanToHclTerraform(struct!.perSsidSettings0BandSteeringEnabled),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    per_ssid_settings_0_bands_enabled: {
      value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(struct!.perSsidSettings0BandsEnabled),
      isBlock: false,
      type: "set",
      storageClassType: "stringList",
    },
    per_ssid_settings_0_min_bitrate: {
      value: cdktf.numberToHclTerraform(struct!.perSsidSettings0MinBitrate),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    per_ssid_settings_10_band_operation_mode: {
      value: cdktf.stringToHclTerraform(struct!.perSsidSettings10BandOperationMode),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    per_ssid_settings_10_band_steering_enabled: {
      value: cdktf.booleanToHclTerraform(struct!.perSsidSettings10BandSteeringEnabled),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    per_ssid_settings_10_bands_enabled: {
      value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(struct!.perSsidSettings10BandsEnabled),
      isBlock: false,
      type: "set",
      storageClassType: "stringList",
    },
    per_ssid_settings_10_min_bitrate: {
      value: cdktf.numberToHclTerraform(struct!.perSsidSettings10MinBitrate),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    per_ssid_settings_11_band_operation_mode: {
      value: cdktf.stringToHclTerraform(struct!.perSsidSettings11BandOperationMode),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    per_ssid_settings_11_band_steering_enabled: {
      value: cdktf.booleanToHclTerraform(struct!.perSsidSettings11BandSteeringEnabled),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    per_ssid_settings_11_bands_enabled: {
      value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(struct!.perSsidSettings11BandsEnabled),
      isBlock: false,
      type: "set",
      storageClassType: "stringList",
    },
    per_ssid_settings_11_min_bitrate: {
      value: cdktf.numberToHclTerraform(struct!.perSsidSettings11MinBitrate),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    per_ssid_settings_12_band_operation_mode: {
      value: cdktf.stringToHclTerraform(struct!.perSsidSettings12BandOperationMode),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    per_ssid_settings_12_band_steering_enabled: {
      value: cdktf.booleanToHclTerraform(struct!.perSsidSettings12BandSteeringEnabled),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    per_ssid_settings_12_bands_enabled: {
      value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(struct!.perSsidSettings12BandsEnabled),
      isBlock: false,
      type: "set",
      storageClassType: "stringList",
    },
    per_ssid_settings_12_min_bitrate: {
      value: cdktf.numberToHclTerraform(struct!.perSsidSettings12MinBitrate),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    per_ssid_settings_13_band_operation_mode: {
      value: cdktf.stringToHclTerraform(struct!.perSsidSettings13BandOperationMode),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    per_ssid_settings_13_band_steering_enabled: {
      value: cdktf.booleanToHclTerraform(struct!.perSsidSettings13BandSteeringEnabled),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    per_ssid_settings_13_bands_enabled: {
      value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(struct!.perSsidSettings13BandsEnabled),
      isBlock: false,
      type: "set",
      storageClassType: "stringList",
    },
    per_ssid_settings_13_min_bitrate: {
      value: cdktf.numberToHclTerraform(struct!.perSsidSettings13MinBitrate),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    per_ssid_settings_14_band_operation_mode: {
      value: cdktf.stringToHclTerraform(struct!.perSsidSettings14BandOperationMode),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    per_ssid_settings_14_band_steering_enabled: {
      value: cdktf.booleanToHclTerraform(struct!.perSsidSettings14BandSteeringEnabled),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    per_ssid_settings_14_bands_enabled: {
      value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(struct!.perSsidSettings14BandsEnabled),
      isBlock: false,
      type: "set",
      storageClassType: "stringList",
    },
    per_ssid_settings_14_min_bitrate: {
      value: cdktf.numberToHclTerraform(struct!.perSsidSettings14MinBitrate),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    per_ssid_settings_1_band_operation_mode: {
      value: cdktf.stringToHclTerraform(struct!.perSsidSettings1BandOperationMode),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    per_ssid_settings_1_band_steering_enabled: {
      value: cdktf.booleanToHclTerraform(struct!.perSsidSettings1BandSteeringEnabled),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    per_ssid_settings_1_bands_enabled: {
      value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(struct!.perSsidSettings1BandsEnabled),
      isBlock: false,
      type: "set",
      storageClassType: "stringList",
    },
    per_ssid_settings_1_min_bitrate: {
      value: cdktf.numberToHclTerraform(struct!.perSsidSettings1MinBitrate),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    per_ssid_settings_2_band_operation_mode: {
      value: cdktf.stringToHclTerraform(struct!.perSsidSettings2BandOperationMode),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    per_ssid_settings_2_band_steering_enabled: {
      value: cdktf.booleanToHclTerraform(struct!.perSsidSettings2BandSteeringEnabled),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    per_ssid_settings_2_bands_enabled: {
      value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(struct!.perSsidSettings2BandsEnabled),
      isBlock: false,
      type: "set",
      storageClassType: "stringList",
    },
    per_ssid_settings_2_min_bitrate: {
      value: cdktf.numberToHclTerraform(struct!.perSsidSettings2MinBitrate),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    per_ssid_settings_3_band_operation_mode: {
      value: cdktf.stringToHclTerraform(struct!.perSsidSettings3BandOperationMode),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    per_ssid_settings_3_band_steering_enabled: {
      value: cdktf.booleanToHclTerraform(struct!.perSsidSettings3BandSteeringEnabled),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    per_ssid_settings_3_bands_enabled: {
      value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(struct!.perSsidSettings3BandsEnabled),
      isBlock: false,
      type: "set",
      storageClassType: "stringList",
    },
    per_ssid_settings_3_min_bitrate: {
      value: cdktf.numberToHclTerraform(struct!.perSsidSettings3MinBitrate),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    per_ssid_settings_4_band_operation_mode: {
      value: cdktf.stringToHclTerraform(struct!.perSsidSettings4BandOperationMode),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    per_ssid_settings_4_band_steering_enabled: {
      value: cdktf.booleanToHclTerraform(struct!.perSsidSettings4BandSteeringEnabled),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    per_ssid_settings_4_bands_enabled: {
      value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(struct!.perSsidSettings4BandsEnabled),
      isBlock: false,
      type: "set",
      storageClassType: "stringList",
    },
    per_ssid_settings_4_min_bitrate: {
      value: cdktf.numberToHclTerraform(struct!.perSsidSettings4MinBitrate),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    per_ssid_settings_5_band_operation_mode: {
      value: cdktf.stringToHclTerraform(struct!.perSsidSettings5BandOperationMode),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    per_ssid_settings_5_band_steering_enabled: {
      value: cdktf.booleanToHclTerraform(struct!.perSsidSettings5BandSteeringEnabled),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    per_ssid_settings_5_bands_enabled: {
      value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(struct!.perSsidSettings5BandsEnabled),
      isBlock: false,
      type: "set",
      storageClassType: "stringList",
    },
    per_ssid_settings_5_min_bitrate: {
      value: cdktf.numberToHclTerraform(struct!.perSsidSettings5MinBitrate),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    per_ssid_settings_6_band_operation_mode: {
      value: cdktf.stringToHclTerraform(struct!.perSsidSettings6BandOperationMode),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    per_ssid_settings_6_band_steering_enabled: {
      value: cdktf.booleanToHclTerraform(struct!.perSsidSettings6BandSteeringEnabled),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    per_ssid_settings_6_bands_enabled: {
      value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(struct!.perSsidSettings6BandsEnabled),
      isBlock: false,
      type: "set",
      storageClassType: "stringList",
    },
    per_ssid_settings_6_min_bitrate: {
      value: cdktf.numberToHclTerraform(struct!.perSsidSettings6MinBitrate),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    per_ssid_settings_7_band_operation_mode: {
      value: cdktf.stringToHclTerraform(struct!.perSsidSettings7BandOperationMode),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    per_ssid_settings_7_band_steering_enabled: {
      value: cdktf.booleanToHclTerraform(struct!.perSsidSettings7BandSteeringEnabled),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    per_ssid_settings_7_bands_enabled: {
      value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(struct!.perSsidSettings7BandsEnabled),
      isBlock: false,
      type: "set",
      storageClassType: "stringList",
    },
    per_ssid_settings_7_min_bitrate: {
      value: cdktf.numberToHclTerraform(struct!.perSsidSettings7MinBitrate),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    per_ssid_settings_8_band_operation_mode: {
      value: cdktf.stringToHclTerraform(struct!.perSsidSettings8BandOperationMode),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    per_ssid_settings_8_band_steering_enabled: {
      value: cdktf.booleanToHclTerraform(struct!.perSsidSettings8BandSteeringEnabled),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    per_ssid_settings_8_bands_enabled: {
      value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(struct!.perSsidSettings8BandsEnabled),
      isBlock: false,
      type: "set",
      storageClassType: "stringList",
    },
    per_ssid_settings_8_min_bitrate: {
      value: cdktf.numberToHclTerraform(struct!.perSsidSettings8MinBitrate),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    per_ssid_settings_9_band_operation_mode: {
      value: cdktf.stringToHclTerraform(struct!.perSsidSettings9BandOperationMode),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    per_ssid_settings_9_band_steering_enabled: {
      value: cdktf.booleanToHclTerraform(struct!.perSsidSettings9BandSteeringEnabled),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    per_ssid_settings_9_bands_enabled: {
      value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(struct!.perSsidSettings9BandsEnabled),
      isBlock: false,
      type: "set",
      storageClassType: "stringList",
    },
    per_ssid_settings_9_min_bitrate: {
      value: cdktf.numberToHclTerraform(struct!.perSsidSettings9MinBitrate),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    six_ghz_settings_channel_width: {
      value: cdktf.stringToHclTerraform(struct!.sixGhzSettingsChannelWidth),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    six_ghz_settings_max_power: {
      value: cdktf.numberToHclTerraform(struct!.sixGhzSettingsMaxPower),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    six_ghz_settings_min_bitrate: {
      value: cdktf.numberToHclTerraform(struct!.sixGhzSettingsMinBitrate),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    six_ghz_settings_min_power: {
      value: cdktf.numberToHclTerraform(struct!.sixGhzSettingsMinPower),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    six_ghz_settings_rxsop: {
      value: cdktf.numberToHclTerraform(struct!.sixGhzSettingsRxsop),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    six_ghz_settings_valid_auto_channels: {
      value: cdktf.listMapperHcl(cdktf.numberToHclTerraform, false)(struct!.sixGhzSettingsValidAutoChannels),
      isBlock: false,
      type: "set",
      storageClassType: "numberList",
    },
    transmission_enabled: {
      value: cdktf.booleanToHclTerraform(struct!.transmissionEnabled),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    two_four_ghz_settings_ax_enabled: {
      value: cdktf.booleanToHclTerraform(struct!.twoFourGhzSettingsAxEnabled),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    two_four_ghz_settings_max_power: {
      value: cdktf.numberToHclTerraform(struct!.twoFourGhzSettingsMaxPower),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    two_four_ghz_settings_min_bitrate: {
      value: cdktf.numberToHclTerraform(struct!.twoFourGhzSettingsMinBitrate),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    two_four_ghz_settings_min_power: {
      value: cdktf.numberToHclTerraform(struct!.twoFourGhzSettingsMinPower),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    two_four_ghz_settings_rxsop: {
      value: cdktf.numberToHclTerraform(struct!.twoFourGhzSettingsRxsop),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    two_four_ghz_settings_valid_auto_channels: {
      value: cdktf.listMapperHcl(cdktf.numberToHclTerraform, false)(struct!.twoFourGhzSettingsValidAutoChannels),
      isBlock: false,
      type: "set",
      storageClassType: "numberList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class WirelessRfProfilesItemsOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  * @param complexObjectIndex the index of this item in the list
  * @param complexObjectIsFromSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean) {
    super(terraformResource, terraformAttribute, complexObjectIsFromSet, complexObjectIndex);
  }

  public get internalValue(): WirelessRfProfilesItems | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._apBandSettingsBandOperationMode !== undefined) {
      hasAnyValues = true;
      internalValueResult.apBandSettingsBandOperationMode = this._apBandSettingsBandOperationMode;
    }
    if (this._apBandSettingsBandSteeringEnabled !== undefined) {
      hasAnyValues = true;
      internalValueResult.apBandSettingsBandSteeringEnabled = this._apBandSettingsBandSteeringEnabled;
    }
    if (this._apBandSettingsBandsEnabled !== undefined) {
      hasAnyValues = true;
      internalValueResult.apBandSettingsBandsEnabled = this._apBandSettingsBandsEnabled;
    }
    if (this._bandSelectionType !== undefined) {
      hasAnyValues = true;
      internalValueResult.bandSelectionType = this._bandSelectionType;
    }
    if (this._clientBalancingEnabled !== undefined) {
      hasAnyValues = true;
      internalValueResult.clientBalancingEnabled = this._clientBalancingEnabled;
    }
    if (this._fiveGhzSettingsChannelWidth !== undefined) {
      hasAnyValues = true;
      internalValueResult.fiveGhzSettingsChannelWidth = this._fiveGhzSettingsChannelWidth;
    }
    if (this._fiveGhzSettingsMaxPower !== undefined) {
      hasAnyValues = true;
      internalValueResult.fiveGhzSettingsMaxPower = this._fiveGhzSettingsMaxPower;
    }
    if (this._fiveGhzSettingsMinBitrate !== undefined) {
      hasAnyValues = true;
      internalValueResult.fiveGhzSettingsMinBitrate = this._fiveGhzSettingsMinBitrate;
    }
    if (this._fiveGhzSettingsMinPower !== undefined) {
      hasAnyValues = true;
      internalValueResult.fiveGhzSettingsMinPower = this._fiveGhzSettingsMinPower;
    }
    if (this._fiveGhzSettingsRxsop !== undefined) {
      hasAnyValues = true;
      internalValueResult.fiveGhzSettingsRxsop = this._fiveGhzSettingsRxsop;
    }
    if (this._fiveGhzSettingsValidAutoChannels !== undefined) {
      hasAnyValues = true;
      internalValueResult.fiveGhzSettingsValidAutoChannels = this._fiveGhzSettingsValidAutoChannels;
    }
    if (this._flexRadiosByModel?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.flexRadiosByModel = this._flexRadiosByModel?.internalValue;
    }
    if (this._isIndoorDefault !== undefined) {
      hasAnyValues = true;
      internalValueResult.isIndoorDefault = this._isIndoorDefault;
    }
    if (this._isOutdoorDefault !== undefined) {
      hasAnyValues = true;
      internalValueResult.isOutdoorDefault = this._isOutdoorDefault;
    }
    if (this._minBitrateType !== undefined) {
      hasAnyValues = true;
      internalValueResult.minBitrateType = this._minBitrateType;
    }
    if (this._name !== undefined) {
      hasAnyValues = true;
      internalValueResult.name = this._name;
    }
    if (this._perSsidSettings0BandOperationMode !== undefined) {
      hasAnyValues = true;
      internalValueResult.perSsidSettings0BandOperationMode = this._perSsidSettings0BandOperationMode;
    }
    if (this._perSsidSettings0BandSteeringEnabled !== undefined) {
      hasAnyValues = true;
      internalValueResult.perSsidSettings0BandSteeringEnabled = this._perSsidSettings0BandSteeringEnabled;
    }
    if (this._perSsidSettings0BandsEnabled !== undefined) {
      hasAnyValues = true;
      internalValueResult.perSsidSettings0BandsEnabled = this._perSsidSettings0BandsEnabled;
    }
    if (this._perSsidSettings0MinBitrate !== undefined) {
      hasAnyValues = true;
      internalValueResult.perSsidSettings0MinBitrate = this._perSsidSettings0MinBitrate;
    }
    if (this._perSsidSettings10BandOperationMode !== undefined) {
      hasAnyValues = true;
      internalValueResult.perSsidSettings10BandOperationMode = this._perSsidSettings10BandOperationMode;
    }
    if (this._perSsidSettings10BandSteeringEnabled !== undefined) {
      hasAnyValues = true;
      internalValueResult.perSsidSettings10BandSteeringEnabled = this._perSsidSettings10BandSteeringEnabled;
    }
    if (this._perSsidSettings10BandsEnabled !== undefined) {
      hasAnyValues = true;
      internalValueResult.perSsidSettings10BandsEnabled = this._perSsidSettings10BandsEnabled;
    }
    if (this._perSsidSettings10MinBitrate !== undefined) {
      hasAnyValues = true;
      internalValueResult.perSsidSettings10MinBitrate = this._perSsidSettings10MinBitrate;
    }
    if (this._perSsidSettings11BandOperationMode !== undefined) {
      hasAnyValues = true;
      internalValueResult.perSsidSettings11BandOperationMode = this._perSsidSettings11BandOperationMode;
    }
    if (this._perSsidSettings11BandSteeringEnabled !== undefined) {
      hasAnyValues = true;
      internalValueResult.perSsidSettings11BandSteeringEnabled = this._perSsidSettings11BandSteeringEnabled;
    }
    if (this._perSsidSettings11BandsEnabled !== undefined) {
      hasAnyValues = true;
      internalValueResult.perSsidSettings11BandsEnabled = this._perSsidSettings11BandsEnabled;
    }
    if (this._perSsidSettings11MinBitrate !== undefined) {
      hasAnyValues = true;
      internalValueResult.perSsidSettings11MinBitrate = this._perSsidSettings11MinBitrate;
    }
    if (this._perSsidSettings12BandOperationMode !== undefined) {
      hasAnyValues = true;
      internalValueResult.perSsidSettings12BandOperationMode = this._perSsidSettings12BandOperationMode;
    }
    if (this._perSsidSettings12BandSteeringEnabled !== undefined) {
      hasAnyValues = true;
      internalValueResult.perSsidSettings12BandSteeringEnabled = this._perSsidSettings12BandSteeringEnabled;
    }
    if (this._perSsidSettings12BandsEnabled !== undefined) {
      hasAnyValues = true;
      internalValueResult.perSsidSettings12BandsEnabled = this._perSsidSettings12BandsEnabled;
    }
    if (this._perSsidSettings12MinBitrate !== undefined) {
      hasAnyValues = true;
      internalValueResult.perSsidSettings12MinBitrate = this._perSsidSettings12MinBitrate;
    }
    if (this._perSsidSettings13BandOperationMode !== undefined) {
      hasAnyValues = true;
      internalValueResult.perSsidSettings13BandOperationMode = this._perSsidSettings13BandOperationMode;
    }
    if (this._perSsidSettings13BandSteeringEnabled !== undefined) {
      hasAnyValues = true;
      internalValueResult.perSsidSettings13BandSteeringEnabled = this._perSsidSettings13BandSteeringEnabled;
    }
    if (this._perSsidSettings13BandsEnabled !== undefined) {
      hasAnyValues = true;
      internalValueResult.perSsidSettings13BandsEnabled = this._perSsidSettings13BandsEnabled;
    }
    if (this._perSsidSettings13MinBitrate !== undefined) {
      hasAnyValues = true;
      internalValueResult.perSsidSettings13MinBitrate = this._perSsidSettings13MinBitrate;
    }
    if (this._perSsidSettings14BandOperationMode !== undefined) {
      hasAnyValues = true;
      internalValueResult.perSsidSettings14BandOperationMode = this._perSsidSettings14BandOperationMode;
    }
    if (this._perSsidSettings14BandSteeringEnabled !== undefined) {
      hasAnyValues = true;
      internalValueResult.perSsidSettings14BandSteeringEnabled = this._perSsidSettings14BandSteeringEnabled;
    }
    if (this._perSsidSettings14BandsEnabled !== undefined) {
      hasAnyValues = true;
      internalValueResult.perSsidSettings14BandsEnabled = this._perSsidSettings14BandsEnabled;
    }
    if (this._perSsidSettings14MinBitrate !== undefined) {
      hasAnyValues = true;
      internalValueResult.perSsidSettings14MinBitrate = this._perSsidSettings14MinBitrate;
    }
    if (this._perSsidSettings1BandOperationMode !== undefined) {
      hasAnyValues = true;
      internalValueResult.perSsidSettings1BandOperationMode = this._perSsidSettings1BandOperationMode;
    }
    if (this._perSsidSettings1BandSteeringEnabled !== undefined) {
      hasAnyValues = true;
      internalValueResult.perSsidSettings1BandSteeringEnabled = this._perSsidSettings1BandSteeringEnabled;
    }
    if (this._perSsidSettings1BandsEnabled !== undefined) {
      hasAnyValues = true;
      internalValueResult.perSsidSettings1BandsEnabled = this._perSsidSettings1BandsEnabled;
    }
    if (this._perSsidSettings1MinBitrate !== undefined) {
      hasAnyValues = true;
      internalValueResult.perSsidSettings1MinBitrate = this._perSsidSettings1MinBitrate;
    }
    if (this._perSsidSettings2BandOperationMode !== undefined) {
      hasAnyValues = true;
      internalValueResult.perSsidSettings2BandOperationMode = this._perSsidSettings2BandOperationMode;
    }
    if (this._perSsidSettings2BandSteeringEnabled !== undefined) {
      hasAnyValues = true;
      internalValueResult.perSsidSettings2BandSteeringEnabled = this._perSsidSettings2BandSteeringEnabled;
    }
    if (this._perSsidSettings2BandsEnabled !== undefined) {
      hasAnyValues = true;
      internalValueResult.perSsidSettings2BandsEnabled = this._perSsidSettings2BandsEnabled;
    }
    if (this._perSsidSettings2MinBitrate !== undefined) {
      hasAnyValues = true;
      internalValueResult.perSsidSettings2MinBitrate = this._perSsidSettings2MinBitrate;
    }
    if (this._perSsidSettings3BandOperationMode !== undefined) {
      hasAnyValues = true;
      internalValueResult.perSsidSettings3BandOperationMode = this._perSsidSettings3BandOperationMode;
    }
    if (this._perSsidSettings3BandSteeringEnabled !== undefined) {
      hasAnyValues = true;
      internalValueResult.perSsidSettings3BandSteeringEnabled = this._perSsidSettings3BandSteeringEnabled;
    }
    if (this._perSsidSettings3BandsEnabled !== undefined) {
      hasAnyValues = true;
      internalValueResult.perSsidSettings3BandsEnabled = this._perSsidSettings3BandsEnabled;
    }
    if (this._perSsidSettings3MinBitrate !== undefined) {
      hasAnyValues = true;
      internalValueResult.perSsidSettings3MinBitrate = this._perSsidSettings3MinBitrate;
    }
    if (this._perSsidSettings4BandOperationMode !== undefined) {
      hasAnyValues = true;
      internalValueResult.perSsidSettings4BandOperationMode = this._perSsidSettings4BandOperationMode;
    }
    if (this._perSsidSettings4BandSteeringEnabled !== undefined) {
      hasAnyValues = true;
      internalValueResult.perSsidSettings4BandSteeringEnabled = this._perSsidSettings4BandSteeringEnabled;
    }
    if (this._perSsidSettings4BandsEnabled !== undefined) {
      hasAnyValues = true;
      internalValueResult.perSsidSettings4BandsEnabled = this._perSsidSettings4BandsEnabled;
    }
    if (this._perSsidSettings4MinBitrate !== undefined) {
      hasAnyValues = true;
      internalValueResult.perSsidSettings4MinBitrate = this._perSsidSettings4MinBitrate;
    }
    if (this._perSsidSettings5BandOperationMode !== undefined) {
      hasAnyValues = true;
      internalValueResult.perSsidSettings5BandOperationMode = this._perSsidSettings5BandOperationMode;
    }
    if (this._perSsidSettings5BandSteeringEnabled !== undefined) {
      hasAnyValues = true;
      internalValueResult.perSsidSettings5BandSteeringEnabled = this._perSsidSettings5BandSteeringEnabled;
    }
    if (this._perSsidSettings5BandsEnabled !== undefined) {
      hasAnyValues = true;
      internalValueResult.perSsidSettings5BandsEnabled = this._perSsidSettings5BandsEnabled;
    }
    if (this._perSsidSettings5MinBitrate !== undefined) {
      hasAnyValues = true;
      internalValueResult.perSsidSettings5MinBitrate = this._perSsidSettings5MinBitrate;
    }
    if (this._perSsidSettings6BandOperationMode !== undefined) {
      hasAnyValues = true;
      internalValueResult.perSsidSettings6BandOperationMode = this._perSsidSettings6BandOperationMode;
    }
    if (this._perSsidSettings6BandSteeringEnabled !== undefined) {
      hasAnyValues = true;
      internalValueResult.perSsidSettings6BandSteeringEnabled = this._perSsidSettings6BandSteeringEnabled;
    }
    if (this._perSsidSettings6BandsEnabled !== undefined) {
      hasAnyValues = true;
      internalValueResult.perSsidSettings6BandsEnabled = this._perSsidSettings6BandsEnabled;
    }
    if (this._perSsidSettings6MinBitrate !== undefined) {
      hasAnyValues = true;
      internalValueResult.perSsidSettings6MinBitrate = this._perSsidSettings6MinBitrate;
    }
    if (this._perSsidSettings7BandOperationMode !== undefined) {
      hasAnyValues = true;
      internalValueResult.perSsidSettings7BandOperationMode = this._perSsidSettings7BandOperationMode;
    }
    if (this._perSsidSettings7BandSteeringEnabled !== undefined) {
      hasAnyValues = true;
      internalValueResult.perSsidSettings7BandSteeringEnabled = this._perSsidSettings7BandSteeringEnabled;
    }
    if (this._perSsidSettings7BandsEnabled !== undefined) {
      hasAnyValues = true;
      internalValueResult.perSsidSettings7BandsEnabled = this._perSsidSettings7BandsEnabled;
    }
    if (this._perSsidSettings7MinBitrate !== undefined) {
      hasAnyValues = true;
      internalValueResult.perSsidSettings7MinBitrate = this._perSsidSettings7MinBitrate;
    }
    if (this._perSsidSettings8BandOperationMode !== undefined) {
      hasAnyValues = true;
      internalValueResult.perSsidSettings8BandOperationMode = this._perSsidSettings8BandOperationMode;
    }
    if (this._perSsidSettings8BandSteeringEnabled !== undefined) {
      hasAnyValues = true;
      internalValueResult.perSsidSettings8BandSteeringEnabled = this._perSsidSettings8BandSteeringEnabled;
    }
    if (this._perSsidSettings8BandsEnabled !== undefined) {
      hasAnyValues = true;
      internalValueResult.perSsidSettings8BandsEnabled = this._perSsidSettings8BandsEnabled;
    }
    if (this._perSsidSettings8MinBitrate !== undefined) {
      hasAnyValues = true;
      internalValueResult.perSsidSettings8MinBitrate = this._perSsidSettings8MinBitrate;
    }
    if (this._perSsidSettings9BandOperationMode !== undefined) {
      hasAnyValues = true;
      internalValueResult.perSsidSettings9BandOperationMode = this._perSsidSettings9BandOperationMode;
    }
    if (this._perSsidSettings9BandSteeringEnabled !== undefined) {
      hasAnyValues = true;
      internalValueResult.perSsidSettings9BandSteeringEnabled = this._perSsidSettings9BandSteeringEnabled;
    }
    if (this._perSsidSettings9BandsEnabled !== undefined) {
      hasAnyValues = true;
      internalValueResult.perSsidSettings9BandsEnabled = this._perSsidSettings9BandsEnabled;
    }
    if (this._perSsidSettings9MinBitrate !== undefined) {
      hasAnyValues = true;
      internalValueResult.perSsidSettings9MinBitrate = this._perSsidSettings9MinBitrate;
    }
    if (this._sixGhzSettingsChannelWidth !== undefined) {
      hasAnyValues = true;
      internalValueResult.sixGhzSettingsChannelWidth = this._sixGhzSettingsChannelWidth;
    }
    if (this._sixGhzSettingsMaxPower !== undefined) {
      hasAnyValues = true;
      internalValueResult.sixGhzSettingsMaxPower = this._sixGhzSettingsMaxPower;
    }
    if (this._sixGhzSettingsMinBitrate !== undefined) {
      hasAnyValues = true;
      internalValueResult.sixGhzSettingsMinBitrate = this._sixGhzSettingsMinBitrate;
    }
    if (this._sixGhzSettingsMinPower !== undefined) {
      hasAnyValues = true;
      internalValueResult.sixGhzSettingsMinPower = this._sixGhzSettingsMinPower;
    }
    if (this._sixGhzSettingsRxsop !== undefined) {
      hasAnyValues = true;
      internalValueResult.sixGhzSettingsRxsop = this._sixGhzSettingsRxsop;
    }
    if (this._sixGhzSettingsValidAutoChannels !== undefined) {
      hasAnyValues = true;
      internalValueResult.sixGhzSettingsValidAutoChannels = this._sixGhzSettingsValidAutoChannels;
    }
    if (this._transmissionEnabled !== undefined) {
      hasAnyValues = true;
      internalValueResult.transmissionEnabled = this._transmissionEnabled;
    }
    if (this._twoFourGhzSettingsAxEnabled !== undefined) {
      hasAnyValues = true;
      internalValueResult.twoFourGhzSettingsAxEnabled = this._twoFourGhzSettingsAxEnabled;
    }
    if (this._twoFourGhzSettingsMaxPower !== undefined) {
      hasAnyValues = true;
      internalValueResult.twoFourGhzSettingsMaxPower = this._twoFourGhzSettingsMaxPower;
    }
    if (this._twoFourGhzSettingsMinBitrate !== undefined) {
      hasAnyValues = true;
      internalValueResult.twoFourGhzSettingsMinBitrate = this._twoFourGhzSettingsMinBitrate;
    }
    if (this._twoFourGhzSettingsMinPower !== undefined) {
      hasAnyValues = true;
      internalValueResult.twoFourGhzSettingsMinPower = this._twoFourGhzSettingsMinPower;
    }
    if (this._twoFourGhzSettingsRxsop !== undefined) {
      hasAnyValues = true;
      internalValueResult.twoFourGhzSettingsRxsop = this._twoFourGhzSettingsRxsop;
    }
    if (this._twoFourGhzSettingsValidAutoChannels !== undefined) {
      hasAnyValues = true;
      internalValueResult.twoFourGhzSettingsValidAutoChannels = this._twoFourGhzSettingsValidAutoChannels;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: WirelessRfProfilesItems | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._apBandSettingsBandOperationMode = undefined;
      this._apBandSettingsBandSteeringEnabled = undefined;
      this._apBandSettingsBandsEnabled = undefined;
      this._bandSelectionType = undefined;
      this._clientBalancingEnabled = undefined;
      this._fiveGhzSettingsChannelWidth = undefined;
      this._fiveGhzSettingsMaxPower = undefined;
      this._fiveGhzSettingsMinBitrate = undefined;
      this._fiveGhzSettingsMinPower = undefined;
      this._fiveGhzSettingsRxsop = undefined;
      this._fiveGhzSettingsValidAutoChannels = undefined;
      this._flexRadiosByModel.internalValue = undefined;
      this._isIndoorDefault = undefined;
      this._isOutdoorDefault = undefined;
      this._minBitrateType = undefined;
      this._name = undefined;
      this._perSsidSettings0BandOperationMode = undefined;
      this._perSsidSettings0BandSteeringEnabled = undefined;
      this._perSsidSettings0BandsEnabled = undefined;
      this._perSsidSettings0MinBitrate = undefined;
      this._perSsidSettings10BandOperationMode = undefined;
      this._perSsidSettings10BandSteeringEnabled = undefined;
      this._perSsidSettings10BandsEnabled = undefined;
      this._perSsidSettings10MinBitrate = undefined;
      this._perSsidSettings11BandOperationMode = undefined;
      this._perSsidSettings11BandSteeringEnabled = undefined;
      this._perSsidSettings11BandsEnabled = undefined;
      this._perSsidSettings11MinBitrate = undefined;
      this._perSsidSettings12BandOperationMode = undefined;
      this._perSsidSettings12BandSteeringEnabled = undefined;
      this._perSsidSettings12BandsEnabled = undefined;
      this._perSsidSettings12MinBitrate = undefined;
      this._perSsidSettings13BandOperationMode = undefined;
      this._perSsidSettings13BandSteeringEnabled = undefined;
      this._perSsidSettings13BandsEnabled = undefined;
      this._perSsidSettings13MinBitrate = undefined;
      this._perSsidSettings14BandOperationMode = undefined;
      this._perSsidSettings14BandSteeringEnabled = undefined;
      this._perSsidSettings14BandsEnabled = undefined;
      this._perSsidSettings14MinBitrate = undefined;
      this._perSsidSettings1BandOperationMode = undefined;
      this._perSsidSettings1BandSteeringEnabled = undefined;
      this._perSsidSettings1BandsEnabled = undefined;
      this._perSsidSettings1MinBitrate = undefined;
      this._perSsidSettings2BandOperationMode = undefined;
      this._perSsidSettings2BandSteeringEnabled = undefined;
      this._perSsidSettings2BandsEnabled = undefined;
      this._perSsidSettings2MinBitrate = undefined;
      this._perSsidSettings3BandOperationMode = undefined;
      this._perSsidSettings3BandSteeringEnabled = undefined;
      this._perSsidSettings3BandsEnabled = undefined;
      this._perSsidSettings3MinBitrate = undefined;
      this._perSsidSettings4BandOperationMode = undefined;
      this._perSsidSettings4BandSteeringEnabled = undefined;
      this._perSsidSettings4BandsEnabled = undefined;
      this._perSsidSettings4MinBitrate = undefined;
      this._perSsidSettings5BandOperationMode = undefined;
      this._perSsidSettings5BandSteeringEnabled = undefined;
      this._perSsidSettings5BandsEnabled = undefined;
      this._perSsidSettings5MinBitrate = undefined;
      this._perSsidSettings6BandOperationMode = undefined;
      this._perSsidSettings6BandSteeringEnabled = undefined;
      this._perSsidSettings6BandsEnabled = undefined;
      this._perSsidSettings6MinBitrate = undefined;
      this._perSsidSettings7BandOperationMode = undefined;
      this._perSsidSettings7BandSteeringEnabled = undefined;
      this._perSsidSettings7BandsEnabled = undefined;
      this._perSsidSettings7MinBitrate = undefined;
      this._perSsidSettings8BandOperationMode = undefined;
      this._perSsidSettings8BandSteeringEnabled = undefined;
      this._perSsidSettings8BandsEnabled = undefined;
      this._perSsidSettings8MinBitrate = undefined;
      this._perSsidSettings9BandOperationMode = undefined;
      this._perSsidSettings9BandSteeringEnabled = undefined;
      this._perSsidSettings9BandsEnabled = undefined;
      this._perSsidSettings9MinBitrate = undefined;
      this._sixGhzSettingsChannelWidth = undefined;
      this._sixGhzSettingsMaxPower = undefined;
      this._sixGhzSettingsMinBitrate = undefined;
      this._sixGhzSettingsMinPower = undefined;
      this._sixGhzSettingsRxsop = undefined;
      this._sixGhzSettingsValidAutoChannels = undefined;
      this._transmissionEnabled = undefined;
      this._twoFourGhzSettingsAxEnabled = undefined;
      this._twoFourGhzSettingsMaxPower = undefined;
      this._twoFourGhzSettingsMinBitrate = undefined;
      this._twoFourGhzSettingsMinPower = undefined;
      this._twoFourGhzSettingsRxsop = undefined;
      this._twoFourGhzSettingsValidAutoChannels = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._apBandSettingsBandOperationMode = value.apBandSettingsBandOperationMode;
      this._apBandSettingsBandSteeringEnabled = value.apBandSettingsBandSteeringEnabled;
      this._apBandSettingsBandsEnabled = value.apBandSettingsBandsEnabled;
      this._bandSelectionType = value.bandSelectionType;
      this._clientBalancingEnabled = value.clientBalancingEnabled;
      this._fiveGhzSettingsChannelWidth = value.fiveGhzSettingsChannelWidth;
      this._fiveGhzSettingsMaxPower = value.fiveGhzSettingsMaxPower;
      this._fiveGhzSettingsMinBitrate = value.fiveGhzSettingsMinBitrate;
      this._fiveGhzSettingsMinPower = value.fiveGhzSettingsMinPower;
      this._fiveGhzSettingsRxsop = value.fiveGhzSettingsRxsop;
      this._fiveGhzSettingsValidAutoChannels = value.fiveGhzSettingsValidAutoChannels;
      this._flexRadiosByModel.internalValue = value.flexRadiosByModel;
      this._isIndoorDefault = value.isIndoorDefault;
      this._isOutdoorDefault = value.isOutdoorDefault;
      this._minBitrateType = value.minBitrateType;
      this._name = value.name;
      this._perSsidSettings0BandOperationMode = value.perSsidSettings0BandOperationMode;
      this._perSsidSettings0BandSteeringEnabled = value.perSsidSettings0BandSteeringEnabled;
      this._perSsidSettings0BandsEnabled = value.perSsidSettings0BandsEnabled;
      this._perSsidSettings0MinBitrate = value.perSsidSettings0MinBitrate;
      this._perSsidSettings10BandOperationMode = value.perSsidSettings10BandOperationMode;
      this._perSsidSettings10BandSteeringEnabled = value.perSsidSettings10BandSteeringEnabled;
      this._perSsidSettings10BandsEnabled = value.perSsidSettings10BandsEnabled;
      this._perSsidSettings10MinBitrate = value.perSsidSettings10MinBitrate;
      this._perSsidSettings11BandOperationMode = value.perSsidSettings11BandOperationMode;
      this._perSsidSettings11BandSteeringEnabled = value.perSsidSettings11BandSteeringEnabled;
      this._perSsidSettings11BandsEnabled = value.perSsidSettings11BandsEnabled;
      this._perSsidSettings11MinBitrate = value.perSsidSettings11MinBitrate;
      this._perSsidSettings12BandOperationMode = value.perSsidSettings12BandOperationMode;
      this._perSsidSettings12BandSteeringEnabled = value.perSsidSettings12BandSteeringEnabled;
      this._perSsidSettings12BandsEnabled = value.perSsidSettings12BandsEnabled;
      this._perSsidSettings12MinBitrate = value.perSsidSettings12MinBitrate;
      this._perSsidSettings13BandOperationMode = value.perSsidSettings13BandOperationMode;
      this._perSsidSettings13BandSteeringEnabled = value.perSsidSettings13BandSteeringEnabled;
      this._perSsidSettings13BandsEnabled = value.perSsidSettings13BandsEnabled;
      this._perSsidSettings13MinBitrate = value.perSsidSettings13MinBitrate;
      this._perSsidSettings14BandOperationMode = value.perSsidSettings14BandOperationMode;
      this._perSsidSettings14BandSteeringEnabled = value.perSsidSettings14BandSteeringEnabled;
      this._perSsidSettings14BandsEnabled = value.perSsidSettings14BandsEnabled;
      this._perSsidSettings14MinBitrate = value.perSsidSettings14MinBitrate;
      this._perSsidSettings1BandOperationMode = value.perSsidSettings1BandOperationMode;
      this._perSsidSettings1BandSteeringEnabled = value.perSsidSettings1BandSteeringEnabled;
      this._perSsidSettings1BandsEnabled = value.perSsidSettings1BandsEnabled;
      this._perSsidSettings1MinBitrate = value.perSsidSettings1MinBitrate;
      this._perSsidSettings2BandOperationMode = value.perSsidSettings2BandOperationMode;
      this._perSsidSettings2BandSteeringEnabled = value.perSsidSettings2BandSteeringEnabled;
      this._perSsidSettings2BandsEnabled = value.perSsidSettings2BandsEnabled;
      this._perSsidSettings2MinBitrate = value.perSsidSettings2MinBitrate;
      this._perSsidSettings3BandOperationMode = value.perSsidSettings3BandOperationMode;
      this._perSsidSettings3BandSteeringEnabled = value.perSsidSettings3BandSteeringEnabled;
      this._perSsidSettings3BandsEnabled = value.perSsidSettings3BandsEnabled;
      this._perSsidSettings3MinBitrate = value.perSsidSettings3MinBitrate;
      this._perSsidSettings4BandOperationMode = value.perSsidSettings4BandOperationMode;
      this._perSsidSettings4BandSteeringEnabled = value.perSsidSettings4BandSteeringEnabled;
      this._perSsidSettings4BandsEnabled = value.perSsidSettings4BandsEnabled;
      this._perSsidSettings4MinBitrate = value.perSsidSettings4MinBitrate;
      this._perSsidSettings5BandOperationMode = value.perSsidSettings5BandOperationMode;
      this._perSsidSettings5BandSteeringEnabled = value.perSsidSettings5BandSteeringEnabled;
      this._perSsidSettings5BandsEnabled = value.perSsidSettings5BandsEnabled;
      this._perSsidSettings5MinBitrate = value.perSsidSettings5MinBitrate;
      this._perSsidSettings6BandOperationMode = value.perSsidSettings6BandOperationMode;
      this._perSsidSettings6BandSteeringEnabled = value.perSsidSettings6BandSteeringEnabled;
      this._perSsidSettings6BandsEnabled = value.perSsidSettings6BandsEnabled;
      this._perSsidSettings6MinBitrate = value.perSsidSettings6MinBitrate;
      this._perSsidSettings7BandOperationMode = value.perSsidSettings7BandOperationMode;
      this._perSsidSettings7BandSteeringEnabled = value.perSsidSettings7BandSteeringEnabled;
      this._perSsidSettings7BandsEnabled = value.perSsidSettings7BandsEnabled;
      this._perSsidSettings7MinBitrate = value.perSsidSettings7MinBitrate;
      this._perSsidSettings8BandOperationMode = value.perSsidSettings8BandOperationMode;
      this._perSsidSettings8BandSteeringEnabled = value.perSsidSettings8BandSteeringEnabled;
      this._perSsidSettings8BandsEnabled = value.perSsidSettings8BandsEnabled;
      this._perSsidSettings8MinBitrate = value.perSsidSettings8MinBitrate;
      this._perSsidSettings9BandOperationMode = value.perSsidSettings9BandOperationMode;
      this._perSsidSettings9BandSteeringEnabled = value.perSsidSettings9BandSteeringEnabled;
      this._perSsidSettings9BandsEnabled = value.perSsidSettings9BandsEnabled;
      this._perSsidSettings9MinBitrate = value.perSsidSettings9MinBitrate;
      this._sixGhzSettingsChannelWidth = value.sixGhzSettingsChannelWidth;
      this._sixGhzSettingsMaxPower = value.sixGhzSettingsMaxPower;
      this._sixGhzSettingsMinBitrate = value.sixGhzSettingsMinBitrate;
      this._sixGhzSettingsMinPower = value.sixGhzSettingsMinPower;
      this._sixGhzSettingsRxsop = value.sixGhzSettingsRxsop;
      this._sixGhzSettingsValidAutoChannels = value.sixGhzSettingsValidAutoChannels;
      this._transmissionEnabled = value.transmissionEnabled;
      this._twoFourGhzSettingsAxEnabled = value.twoFourGhzSettingsAxEnabled;
      this._twoFourGhzSettingsMaxPower = value.twoFourGhzSettingsMaxPower;
      this._twoFourGhzSettingsMinBitrate = value.twoFourGhzSettingsMinBitrate;
      this._twoFourGhzSettingsMinPower = value.twoFourGhzSettingsMinPower;
      this._twoFourGhzSettingsRxsop = value.twoFourGhzSettingsRxsop;
      this._twoFourGhzSettingsValidAutoChannels = value.twoFourGhzSettingsValidAutoChannels;
    }
  }

  // ap_band_settings_band_operation_mode - computed: false, optional: true, required: false
  private _apBandSettingsBandOperationMode?: string; 
  public get apBandSettingsBandOperationMode() {
    return this.getStringAttribute('ap_band_settings_band_operation_mode');
  }
  public set apBandSettingsBandOperationMode(value: string) {
    this._apBandSettingsBandOperationMode = value;
  }
  public resetApBandSettingsBandOperationMode() {
    this._apBandSettingsBandOperationMode = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get apBandSettingsBandOperationModeInput() {
    return this._apBandSettingsBandOperationMode;
  }

  // ap_band_settings_band_steering_enabled - computed: false, optional: true, required: false
  private _apBandSettingsBandSteeringEnabled?: boolean | cdktf.IResolvable; 
  public get apBandSettingsBandSteeringEnabled() {
    return this.getBooleanAttribute('ap_band_settings_band_steering_enabled');
  }
  public set apBandSettingsBandSteeringEnabled(value: boolean | cdktf.IResolvable) {
    this._apBandSettingsBandSteeringEnabled = value;
  }
  public resetApBandSettingsBandSteeringEnabled() {
    this._apBandSettingsBandSteeringEnabled = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get apBandSettingsBandSteeringEnabledInput() {
    return this._apBandSettingsBandSteeringEnabled;
  }

  // ap_band_settings_bands_enabled - computed: false, optional: true, required: false
  private _apBandSettingsBandsEnabled?: string[]; 
  public get apBandSettingsBandsEnabled() {
    return cdktf.Fn.tolist(this.getListAttribute('ap_band_settings_bands_enabled'));
  }
  public set apBandSettingsBandsEnabled(value: string[]) {
    this._apBandSettingsBandsEnabled = value;
  }
  public resetApBandSettingsBandsEnabled() {
    this._apBandSettingsBandsEnabled = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get apBandSettingsBandsEnabledInput() {
    return this._apBandSettingsBandsEnabled;
  }

  // band_selection_type - computed: false, optional: false, required: true
  private _bandSelectionType?: string; 
  public get bandSelectionType() {
    return this.getStringAttribute('band_selection_type');
  }
  public set bandSelectionType(value: string) {
    this._bandSelectionType = value;
  }
  // Temporarily expose input value. Use with caution.
  public get bandSelectionTypeInput() {
    return this._bandSelectionType;
  }

  // client_balancing_enabled - computed: false, optional: true, required: false
  private _clientBalancingEnabled?: boolean | cdktf.IResolvable; 
  public get clientBalancingEnabled() {
    return this.getBooleanAttribute('client_balancing_enabled');
  }
  public set clientBalancingEnabled(value: boolean | cdktf.IResolvable) {
    this._clientBalancingEnabled = value;
  }
  public resetClientBalancingEnabled() {
    this._clientBalancingEnabled = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get clientBalancingEnabledInput() {
    return this._clientBalancingEnabled;
  }

  // five_ghz_settings_channel_width - computed: false, optional: true, required: false
  private _fiveGhzSettingsChannelWidth?: string; 
  public get fiveGhzSettingsChannelWidth() {
    return this.getStringAttribute('five_ghz_settings_channel_width');
  }
  public set fiveGhzSettingsChannelWidth(value: string) {
    this._fiveGhzSettingsChannelWidth = value;
  }
  public resetFiveGhzSettingsChannelWidth() {
    this._fiveGhzSettingsChannelWidth = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get fiveGhzSettingsChannelWidthInput() {
    return this._fiveGhzSettingsChannelWidth;
  }

  // five_ghz_settings_max_power - computed: false, optional: true, required: false
  private _fiveGhzSettingsMaxPower?: number; 
  public get fiveGhzSettingsMaxPower() {
    return this.getNumberAttribute('five_ghz_settings_max_power');
  }
  public set fiveGhzSettingsMaxPower(value: number) {
    this._fiveGhzSettingsMaxPower = value;
  }
  public resetFiveGhzSettingsMaxPower() {
    this._fiveGhzSettingsMaxPower = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get fiveGhzSettingsMaxPowerInput() {
    return this._fiveGhzSettingsMaxPower;
  }

  // five_ghz_settings_min_bitrate - computed: false, optional: true, required: false
  private _fiveGhzSettingsMinBitrate?: number; 
  public get fiveGhzSettingsMinBitrate() {
    return this.getNumberAttribute('five_ghz_settings_min_bitrate');
  }
  public set fiveGhzSettingsMinBitrate(value: number) {
    this._fiveGhzSettingsMinBitrate = value;
  }
  public resetFiveGhzSettingsMinBitrate() {
    this._fiveGhzSettingsMinBitrate = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get fiveGhzSettingsMinBitrateInput() {
    return this._fiveGhzSettingsMinBitrate;
  }

  // five_ghz_settings_min_power - computed: false, optional: true, required: false
  private _fiveGhzSettingsMinPower?: number; 
  public get fiveGhzSettingsMinPower() {
    return this.getNumberAttribute('five_ghz_settings_min_power');
  }
  public set fiveGhzSettingsMinPower(value: number) {
    this._fiveGhzSettingsMinPower = value;
  }
  public resetFiveGhzSettingsMinPower() {
    this._fiveGhzSettingsMinPower = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get fiveGhzSettingsMinPowerInput() {
    return this._fiveGhzSettingsMinPower;
  }

  // five_ghz_settings_rxsop - computed: false, optional: true, required: false
  private _fiveGhzSettingsRxsop?: number; 
  public get fiveGhzSettingsRxsop() {
    return this.getNumberAttribute('five_ghz_settings_rxsop');
  }
  public set fiveGhzSettingsRxsop(value: number) {
    this._fiveGhzSettingsRxsop = value;
  }
  public resetFiveGhzSettingsRxsop() {
    this._fiveGhzSettingsRxsop = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get fiveGhzSettingsRxsopInput() {
    return this._fiveGhzSettingsRxsop;
  }

  // five_ghz_settings_valid_auto_channels - computed: false, optional: true, required: false
  private _fiveGhzSettingsValidAutoChannels?: number[]; 
  public get fiveGhzSettingsValidAutoChannels() {
    return cdktf.Token.asNumberList(cdktf.Fn.tolist(this.getNumberListAttribute('five_ghz_settings_valid_auto_channels')));
  }
  public set fiveGhzSettingsValidAutoChannels(value: number[]) {
    this._fiveGhzSettingsValidAutoChannels = value;
  }
  public resetFiveGhzSettingsValidAutoChannels() {
    this._fiveGhzSettingsValidAutoChannels = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get fiveGhzSettingsValidAutoChannelsInput() {
    return this._fiveGhzSettingsValidAutoChannels;
  }

  // flex_radios_by_model - computed: false, optional: true, required: false
  private _flexRadiosByModel = new WirelessRfProfilesItemsFlexRadiosByModelList(this, "flex_radios_by_model", false);
  public get flexRadiosByModel() {
    return this._flexRadiosByModel;
  }
  public putFlexRadiosByModel(value: WirelessRfProfilesItemsFlexRadiosByModel[] | cdktf.IResolvable) {
    this._flexRadiosByModel.internalValue = value;
  }
  public resetFlexRadiosByModel() {
    this._flexRadiosByModel.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get flexRadiosByModelInput() {
    return this._flexRadiosByModel.internalValue;
  }

  // id - computed: true, optional: false, required: false
  public get id() {
    return this.getStringAttribute('id');
  }

  // is_indoor_default - computed: false, optional: true, required: false
  private _isIndoorDefault?: boolean | cdktf.IResolvable; 
  public get isIndoorDefault() {
    return this.getBooleanAttribute('is_indoor_default');
  }
  public set isIndoorDefault(value: boolean | cdktf.IResolvable) {
    this._isIndoorDefault = value;
  }
  public resetIsIndoorDefault() {
    this._isIndoorDefault = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get isIndoorDefaultInput() {
    return this._isIndoorDefault;
  }

  // is_outdoor_default - computed: false, optional: true, required: false
  private _isOutdoorDefault?: boolean | cdktf.IResolvable; 
  public get isOutdoorDefault() {
    return this.getBooleanAttribute('is_outdoor_default');
  }
  public set isOutdoorDefault(value: boolean | cdktf.IResolvable) {
    this._isOutdoorDefault = value;
  }
  public resetIsOutdoorDefault() {
    this._isOutdoorDefault = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get isOutdoorDefaultInput() {
    return this._isOutdoorDefault;
  }

  // min_bitrate_type - computed: false, optional: true, required: false
  private _minBitrateType?: string; 
  public get minBitrateType() {
    return this.getStringAttribute('min_bitrate_type');
  }
  public set minBitrateType(value: string) {
    this._minBitrateType = value;
  }
  public resetMinBitrateType() {
    this._minBitrateType = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get minBitrateTypeInput() {
    return this._minBitrateType;
  }

  // name - computed: false, optional: false, required: true
  private _name?: string; 
  public get name() {
    return this.getStringAttribute('name');
  }
  public set name(value: string) {
    this._name = value;
  }
  // Temporarily expose input value. Use with caution.
  public get nameInput() {
    return this._name;
  }

  // per_ssid_settings_0_band_operation_mode - computed: false, optional: true, required: false
  private _perSsidSettings0BandOperationMode?: string; 
  public get perSsidSettings0BandOperationMode() {
    return this.getStringAttribute('per_ssid_settings_0_band_operation_mode');
  }
  public set perSsidSettings0BandOperationMode(value: string) {
    this._perSsidSettings0BandOperationMode = value;
  }
  public resetPerSsidSettings0BandOperationMode() {
    this._perSsidSettings0BandOperationMode = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get perSsidSettings0BandOperationModeInput() {
    return this._perSsidSettings0BandOperationMode;
  }

  // per_ssid_settings_0_band_steering_enabled - computed: false, optional: true, required: false
  private _perSsidSettings0BandSteeringEnabled?: boolean | cdktf.IResolvable; 
  public get perSsidSettings0BandSteeringEnabled() {
    return this.getBooleanAttribute('per_ssid_settings_0_band_steering_enabled');
  }
  public set perSsidSettings0BandSteeringEnabled(value: boolean | cdktf.IResolvable) {
    this._perSsidSettings0BandSteeringEnabled = value;
  }
  public resetPerSsidSettings0BandSteeringEnabled() {
    this._perSsidSettings0BandSteeringEnabled = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get perSsidSettings0BandSteeringEnabledInput() {
    return this._perSsidSettings0BandSteeringEnabled;
  }

  // per_ssid_settings_0_bands_enabled - computed: false, optional: true, required: false
  private _perSsidSettings0BandsEnabled?: string[]; 
  public get perSsidSettings0BandsEnabled() {
    return cdktf.Fn.tolist(this.getListAttribute('per_ssid_settings_0_bands_enabled'));
  }
  public set perSsidSettings0BandsEnabled(value: string[]) {
    this._perSsidSettings0BandsEnabled = value;
  }
  public resetPerSsidSettings0BandsEnabled() {
    this._perSsidSettings0BandsEnabled = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get perSsidSettings0BandsEnabledInput() {
    return this._perSsidSettings0BandsEnabled;
  }

  // per_ssid_settings_0_min_bitrate - computed: false, optional: true, required: false
  private _perSsidSettings0MinBitrate?: number; 
  public get perSsidSettings0MinBitrate() {
    return this.getNumberAttribute('per_ssid_settings_0_min_bitrate');
  }
  public set perSsidSettings0MinBitrate(value: number) {
    this._perSsidSettings0MinBitrate = value;
  }
  public resetPerSsidSettings0MinBitrate() {
    this._perSsidSettings0MinBitrate = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get perSsidSettings0MinBitrateInput() {
    return this._perSsidSettings0MinBitrate;
  }

  // per_ssid_settings_10_band_operation_mode - computed: false, optional: true, required: false
  private _perSsidSettings10BandOperationMode?: string; 
  public get perSsidSettings10BandOperationMode() {
    return this.getStringAttribute('per_ssid_settings_10_band_operation_mode');
  }
  public set perSsidSettings10BandOperationMode(value: string) {
    this._perSsidSettings10BandOperationMode = value;
  }
  public resetPerSsidSettings10BandOperationMode() {
    this._perSsidSettings10BandOperationMode = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get perSsidSettings10BandOperationModeInput() {
    return this._perSsidSettings10BandOperationMode;
  }

  // per_ssid_settings_10_band_steering_enabled - computed: false, optional: true, required: false
  private _perSsidSettings10BandSteeringEnabled?: boolean | cdktf.IResolvable; 
  public get perSsidSettings10BandSteeringEnabled() {
    return this.getBooleanAttribute('per_ssid_settings_10_band_steering_enabled');
  }
  public set perSsidSettings10BandSteeringEnabled(value: boolean | cdktf.IResolvable) {
    this._perSsidSettings10BandSteeringEnabled = value;
  }
  public resetPerSsidSettings10BandSteeringEnabled() {
    this._perSsidSettings10BandSteeringEnabled = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get perSsidSettings10BandSteeringEnabledInput() {
    return this._perSsidSettings10BandSteeringEnabled;
  }

  // per_ssid_settings_10_bands_enabled - computed: false, optional: true, required: false
  private _perSsidSettings10BandsEnabled?: string[]; 
  public get perSsidSettings10BandsEnabled() {
    return cdktf.Fn.tolist(this.getListAttribute('per_ssid_settings_10_bands_enabled'));
  }
  public set perSsidSettings10BandsEnabled(value: string[]) {
    this._perSsidSettings10BandsEnabled = value;
  }
  public resetPerSsidSettings10BandsEnabled() {
    this._perSsidSettings10BandsEnabled = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get perSsidSettings10BandsEnabledInput() {
    return this._perSsidSettings10BandsEnabled;
  }

  // per_ssid_settings_10_min_bitrate - computed: false, optional: true, required: false
  private _perSsidSettings10MinBitrate?: number; 
  public get perSsidSettings10MinBitrate() {
    return this.getNumberAttribute('per_ssid_settings_10_min_bitrate');
  }
  public set perSsidSettings10MinBitrate(value: number) {
    this._perSsidSettings10MinBitrate = value;
  }
  public resetPerSsidSettings10MinBitrate() {
    this._perSsidSettings10MinBitrate = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get perSsidSettings10MinBitrateInput() {
    return this._perSsidSettings10MinBitrate;
  }

  // per_ssid_settings_11_band_operation_mode - computed: false, optional: true, required: false
  private _perSsidSettings11BandOperationMode?: string; 
  public get perSsidSettings11BandOperationMode() {
    return this.getStringAttribute('per_ssid_settings_11_band_operation_mode');
  }
  public set perSsidSettings11BandOperationMode(value: string) {
    this._perSsidSettings11BandOperationMode = value;
  }
  public resetPerSsidSettings11BandOperationMode() {
    this._perSsidSettings11BandOperationMode = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get perSsidSettings11BandOperationModeInput() {
    return this._perSsidSettings11BandOperationMode;
  }

  // per_ssid_settings_11_band_steering_enabled - computed: false, optional: true, required: false
  private _perSsidSettings11BandSteeringEnabled?: boolean | cdktf.IResolvable; 
  public get perSsidSettings11BandSteeringEnabled() {
    return this.getBooleanAttribute('per_ssid_settings_11_band_steering_enabled');
  }
  public set perSsidSettings11BandSteeringEnabled(value: boolean | cdktf.IResolvable) {
    this._perSsidSettings11BandSteeringEnabled = value;
  }
  public resetPerSsidSettings11BandSteeringEnabled() {
    this._perSsidSettings11BandSteeringEnabled = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get perSsidSettings11BandSteeringEnabledInput() {
    return this._perSsidSettings11BandSteeringEnabled;
  }

  // per_ssid_settings_11_bands_enabled - computed: false, optional: true, required: false
  private _perSsidSettings11BandsEnabled?: string[]; 
  public get perSsidSettings11BandsEnabled() {
    return cdktf.Fn.tolist(this.getListAttribute('per_ssid_settings_11_bands_enabled'));
  }
  public set perSsidSettings11BandsEnabled(value: string[]) {
    this._perSsidSettings11BandsEnabled = value;
  }
  public resetPerSsidSettings11BandsEnabled() {
    this._perSsidSettings11BandsEnabled = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get perSsidSettings11BandsEnabledInput() {
    return this._perSsidSettings11BandsEnabled;
  }

  // per_ssid_settings_11_min_bitrate - computed: false, optional: true, required: false
  private _perSsidSettings11MinBitrate?: number; 
  public get perSsidSettings11MinBitrate() {
    return this.getNumberAttribute('per_ssid_settings_11_min_bitrate');
  }
  public set perSsidSettings11MinBitrate(value: number) {
    this._perSsidSettings11MinBitrate = value;
  }
  public resetPerSsidSettings11MinBitrate() {
    this._perSsidSettings11MinBitrate = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get perSsidSettings11MinBitrateInput() {
    return this._perSsidSettings11MinBitrate;
  }

  // per_ssid_settings_12_band_operation_mode - computed: false, optional: true, required: false
  private _perSsidSettings12BandOperationMode?: string; 
  public get perSsidSettings12BandOperationMode() {
    return this.getStringAttribute('per_ssid_settings_12_band_operation_mode');
  }
  public set perSsidSettings12BandOperationMode(value: string) {
    this._perSsidSettings12BandOperationMode = value;
  }
  public resetPerSsidSettings12BandOperationMode() {
    this._perSsidSettings12BandOperationMode = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get perSsidSettings12BandOperationModeInput() {
    return this._perSsidSettings12BandOperationMode;
  }

  // per_ssid_settings_12_band_steering_enabled - computed: false, optional: true, required: false
  private _perSsidSettings12BandSteeringEnabled?: boolean | cdktf.IResolvable; 
  public get perSsidSettings12BandSteeringEnabled() {
    return this.getBooleanAttribute('per_ssid_settings_12_band_steering_enabled');
  }
  public set perSsidSettings12BandSteeringEnabled(value: boolean | cdktf.IResolvable) {
    this._perSsidSettings12BandSteeringEnabled = value;
  }
  public resetPerSsidSettings12BandSteeringEnabled() {
    this._perSsidSettings12BandSteeringEnabled = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get perSsidSettings12BandSteeringEnabledInput() {
    return this._perSsidSettings12BandSteeringEnabled;
  }

  // per_ssid_settings_12_bands_enabled - computed: false, optional: true, required: false
  private _perSsidSettings12BandsEnabled?: string[]; 
  public get perSsidSettings12BandsEnabled() {
    return cdktf.Fn.tolist(this.getListAttribute('per_ssid_settings_12_bands_enabled'));
  }
  public set perSsidSettings12BandsEnabled(value: string[]) {
    this._perSsidSettings12BandsEnabled = value;
  }
  public resetPerSsidSettings12BandsEnabled() {
    this._perSsidSettings12BandsEnabled = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get perSsidSettings12BandsEnabledInput() {
    return this._perSsidSettings12BandsEnabled;
  }

  // per_ssid_settings_12_min_bitrate - computed: false, optional: true, required: false
  private _perSsidSettings12MinBitrate?: number; 
  public get perSsidSettings12MinBitrate() {
    return this.getNumberAttribute('per_ssid_settings_12_min_bitrate');
  }
  public set perSsidSettings12MinBitrate(value: number) {
    this._perSsidSettings12MinBitrate = value;
  }
  public resetPerSsidSettings12MinBitrate() {
    this._perSsidSettings12MinBitrate = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get perSsidSettings12MinBitrateInput() {
    return this._perSsidSettings12MinBitrate;
  }

  // per_ssid_settings_13_band_operation_mode - computed: false, optional: true, required: false
  private _perSsidSettings13BandOperationMode?: string; 
  public get perSsidSettings13BandOperationMode() {
    return this.getStringAttribute('per_ssid_settings_13_band_operation_mode');
  }
  public set perSsidSettings13BandOperationMode(value: string) {
    this._perSsidSettings13BandOperationMode = value;
  }
  public resetPerSsidSettings13BandOperationMode() {
    this._perSsidSettings13BandOperationMode = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get perSsidSettings13BandOperationModeInput() {
    return this._perSsidSettings13BandOperationMode;
  }

  // per_ssid_settings_13_band_steering_enabled - computed: false, optional: true, required: false
  private _perSsidSettings13BandSteeringEnabled?: boolean | cdktf.IResolvable; 
  public get perSsidSettings13BandSteeringEnabled() {
    return this.getBooleanAttribute('per_ssid_settings_13_band_steering_enabled');
  }
  public set perSsidSettings13BandSteeringEnabled(value: boolean | cdktf.IResolvable) {
    this._perSsidSettings13BandSteeringEnabled = value;
  }
  public resetPerSsidSettings13BandSteeringEnabled() {
    this._perSsidSettings13BandSteeringEnabled = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get perSsidSettings13BandSteeringEnabledInput() {
    return this._perSsidSettings13BandSteeringEnabled;
  }

  // per_ssid_settings_13_bands_enabled - computed: false, optional: true, required: false
  private _perSsidSettings13BandsEnabled?: string[]; 
  public get perSsidSettings13BandsEnabled() {
    return cdktf.Fn.tolist(this.getListAttribute('per_ssid_settings_13_bands_enabled'));
  }
  public set perSsidSettings13BandsEnabled(value: string[]) {
    this._perSsidSettings13BandsEnabled = value;
  }
  public resetPerSsidSettings13BandsEnabled() {
    this._perSsidSettings13BandsEnabled = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get perSsidSettings13BandsEnabledInput() {
    return this._perSsidSettings13BandsEnabled;
  }

  // per_ssid_settings_13_min_bitrate - computed: false, optional: true, required: false
  private _perSsidSettings13MinBitrate?: number; 
  public get perSsidSettings13MinBitrate() {
    return this.getNumberAttribute('per_ssid_settings_13_min_bitrate');
  }
  public set perSsidSettings13MinBitrate(value: number) {
    this._perSsidSettings13MinBitrate = value;
  }
  public resetPerSsidSettings13MinBitrate() {
    this._perSsidSettings13MinBitrate = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get perSsidSettings13MinBitrateInput() {
    return this._perSsidSettings13MinBitrate;
  }

  // per_ssid_settings_14_band_operation_mode - computed: false, optional: true, required: false
  private _perSsidSettings14BandOperationMode?: string; 
  public get perSsidSettings14BandOperationMode() {
    return this.getStringAttribute('per_ssid_settings_14_band_operation_mode');
  }
  public set perSsidSettings14BandOperationMode(value: string) {
    this._perSsidSettings14BandOperationMode = value;
  }
  public resetPerSsidSettings14BandOperationMode() {
    this._perSsidSettings14BandOperationMode = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get perSsidSettings14BandOperationModeInput() {
    return this._perSsidSettings14BandOperationMode;
  }

  // per_ssid_settings_14_band_steering_enabled - computed: false, optional: true, required: false
  private _perSsidSettings14BandSteeringEnabled?: boolean | cdktf.IResolvable; 
  public get perSsidSettings14BandSteeringEnabled() {
    return this.getBooleanAttribute('per_ssid_settings_14_band_steering_enabled');
  }
  public set perSsidSettings14BandSteeringEnabled(value: boolean | cdktf.IResolvable) {
    this._perSsidSettings14BandSteeringEnabled = value;
  }
  public resetPerSsidSettings14BandSteeringEnabled() {
    this._perSsidSettings14BandSteeringEnabled = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get perSsidSettings14BandSteeringEnabledInput() {
    return this._perSsidSettings14BandSteeringEnabled;
  }

  // per_ssid_settings_14_bands_enabled - computed: false, optional: true, required: false
  private _perSsidSettings14BandsEnabled?: string[]; 
  public get perSsidSettings14BandsEnabled() {
    return cdktf.Fn.tolist(this.getListAttribute('per_ssid_settings_14_bands_enabled'));
  }
  public set perSsidSettings14BandsEnabled(value: string[]) {
    this._perSsidSettings14BandsEnabled = value;
  }
  public resetPerSsidSettings14BandsEnabled() {
    this._perSsidSettings14BandsEnabled = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get perSsidSettings14BandsEnabledInput() {
    return this._perSsidSettings14BandsEnabled;
  }

  // per_ssid_settings_14_min_bitrate - computed: false, optional: true, required: false
  private _perSsidSettings14MinBitrate?: number; 
  public get perSsidSettings14MinBitrate() {
    return this.getNumberAttribute('per_ssid_settings_14_min_bitrate');
  }
  public set perSsidSettings14MinBitrate(value: number) {
    this._perSsidSettings14MinBitrate = value;
  }
  public resetPerSsidSettings14MinBitrate() {
    this._perSsidSettings14MinBitrate = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get perSsidSettings14MinBitrateInput() {
    return this._perSsidSettings14MinBitrate;
  }

  // per_ssid_settings_1_band_operation_mode - computed: false, optional: true, required: false
  private _perSsidSettings1BandOperationMode?: string; 
  public get perSsidSettings1BandOperationMode() {
    return this.getStringAttribute('per_ssid_settings_1_band_operation_mode');
  }
  public set perSsidSettings1BandOperationMode(value: string) {
    this._perSsidSettings1BandOperationMode = value;
  }
  public resetPerSsidSettings1BandOperationMode() {
    this._perSsidSettings1BandOperationMode = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get perSsidSettings1BandOperationModeInput() {
    return this._perSsidSettings1BandOperationMode;
  }

  // per_ssid_settings_1_band_steering_enabled - computed: false, optional: true, required: false
  private _perSsidSettings1BandSteeringEnabled?: boolean | cdktf.IResolvable; 
  public get perSsidSettings1BandSteeringEnabled() {
    return this.getBooleanAttribute('per_ssid_settings_1_band_steering_enabled');
  }
  public set perSsidSettings1BandSteeringEnabled(value: boolean | cdktf.IResolvable) {
    this._perSsidSettings1BandSteeringEnabled = value;
  }
  public resetPerSsidSettings1BandSteeringEnabled() {
    this._perSsidSettings1BandSteeringEnabled = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get perSsidSettings1BandSteeringEnabledInput() {
    return this._perSsidSettings1BandSteeringEnabled;
  }

  // per_ssid_settings_1_bands_enabled - computed: false, optional: true, required: false
  private _perSsidSettings1BandsEnabled?: string[]; 
  public get perSsidSettings1BandsEnabled() {
    return cdktf.Fn.tolist(this.getListAttribute('per_ssid_settings_1_bands_enabled'));
  }
  public set perSsidSettings1BandsEnabled(value: string[]) {
    this._perSsidSettings1BandsEnabled = value;
  }
  public resetPerSsidSettings1BandsEnabled() {
    this._perSsidSettings1BandsEnabled = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get perSsidSettings1BandsEnabledInput() {
    return this._perSsidSettings1BandsEnabled;
  }

  // per_ssid_settings_1_min_bitrate - computed: false, optional: true, required: false
  private _perSsidSettings1MinBitrate?: number; 
  public get perSsidSettings1MinBitrate() {
    return this.getNumberAttribute('per_ssid_settings_1_min_bitrate');
  }
  public set perSsidSettings1MinBitrate(value: number) {
    this._perSsidSettings1MinBitrate = value;
  }
  public resetPerSsidSettings1MinBitrate() {
    this._perSsidSettings1MinBitrate = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get perSsidSettings1MinBitrateInput() {
    return this._perSsidSettings1MinBitrate;
  }

  // per_ssid_settings_2_band_operation_mode - computed: false, optional: true, required: false
  private _perSsidSettings2BandOperationMode?: string; 
  public get perSsidSettings2BandOperationMode() {
    return this.getStringAttribute('per_ssid_settings_2_band_operation_mode');
  }
  public set perSsidSettings2BandOperationMode(value: string) {
    this._perSsidSettings2BandOperationMode = value;
  }
  public resetPerSsidSettings2BandOperationMode() {
    this._perSsidSettings2BandOperationMode = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get perSsidSettings2BandOperationModeInput() {
    return this._perSsidSettings2BandOperationMode;
  }

  // per_ssid_settings_2_band_steering_enabled - computed: false, optional: true, required: false
  private _perSsidSettings2BandSteeringEnabled?: boolean | cdktf.IResolvable; 
  public get perSsidSettings2BandSteeringEnabled() {
    return this.getBooleanAttribute('per_ssid_settings_2_band_steering_enabled');
  }
  public set perSsidSettings2BandSteeringEnabled(value: boolean | cdktf.IResolvable) {
    this._perSsidSettings2BandSteeringEnabled = value;
  }
  public resetPerSsidSettings2BandSteeringEnabled() {
    this._perSsidSettings2BandSteeringEnabled = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get perSsidSettings2BandSteeringEnabledInput() {
    return this._perSsidSettings2BandSteeringEnabled;
  }

  // per_ssid_settings_2_bands_enabled - computed: false, optional: true, required: false
  private _perSsidSettings2BandsEnabled?: string[]; 
  public get perSsidSettings2BandsEnabled() {
    return cdktf.Fn.tolist(this.getListAttribute('per_ssid_settings_2_bands_enabled'));
  }
  public set perSsidSettings2BandsEnabled(value: string[]) {
    this._perSsidSettings2BandsEnabled = value;
  }
  public resetPerSsidSettings2BandsEnabled() {
    this._perSsidSettings2BandsEnabled = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get perSsidSettings2BandsEnabledInput() {
    return this._perSsidSettings2BandsEnabled;
  }

  // per_ssid_settings_2_min_bitrate - computed: false, optional: true, required: false
  private _perSsidSettings2MinBitrate?: number; 
  public get perSsidSettings2MinBitrate() {
    return this.getNumberAttribute('per_ssid_settings_2_min_bitrate');
  }
  public set perSsidSettings2MinBitrate(value: number) {
    this._perSsidSettings2MinBitrate = value;
  }
  public resetPerSsidSettings2MinBitrate() {
    this._perSsidSettings2MinBitrate = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get perSsidSettings2MinBitrateInput() {
    return this._perSsidSettings2MinBitrate;
  }

  // per_ssid_settings_3_band_operation_mode - computed: false, optional: true, required: false
  private _perSsidSettings3BandOperationMode?: string; 
  public get perSsidSettings3BandOperationMode() {
    return this.getStringAttribute('per_ssid_settings_3_band_operation_mode');
  }
  public set perSsidSettings3BandOperationMode(value: string) {
    this._perSsidSettings3BandOperationMode = value;
  }
  public resetPerSsidSettings3BandOperationMode() {
    this._perSsidSettings3BandOperationMode = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get perSsidSettings3BandOperationModeInput() {
    return this._perSsidSettings3BandOperationMode;
  }

  // per_ssid_settings_3_band_steering_enabled - computed: false, optional: true, required: false
  private _perSsidSettings3BandSteeringEnabled?: boolean | cdktf.IResolvable; 
  public get perSsidSettings3BandSteeringEnabled() {
    return this.getBooleanAttribute('per_ssid_settings_3_band_steering_enabled');
  }
  public set perSsidSettings3BandSteeringEnabled(value: boolean | cdktf.IResolvable) {
    this._perSsidSettings3BandSteeringEnabled = value;
  }
  public resetPerSsidSettings3BandSteeringEnabled() {
    this._perSsidSettings3BandSteeringEnabled = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get perSsidSettings3BandSteeringEnabledInput() {
    return this._perSsidSettings3BandSteeringEnabled;
  }

  // per_ssid_settings_3_bands_enabled - computed: false, optional: true, required: false
  private _perSsidSettings3BandsEnabled?: string[]; 
  public get perSsidSettings3BandsEnabled() {
    return cdktf.Fn.tolist(this.getListAttribute('per_ssid_settings_3_bands_enabled'));
  }
  public set perSsidSettings3BandsEnabled(value: string[]) {
    this._perSsidSettings3BandsEnabled = value;
  }
  public resetPerSsidSettings3BandsEnabled() {
    this._perSsidSettings3BandsEnabled = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get perSsidSettings3BandsEnabledInput() {
    return this._perSsidSettings3BandsEnabled;
  }

  // per_ssid_settings_3_min_bitrate - computed: false, optional: true, required: false
  private _perSsidSettings3MinBitrate?: number; 
  public get perSsidSettings3MinBitrate() {
    return this.getNumberAttribute('per_ssid_settings_3_min_bitrate');
  }
  public set perSsidSettings3MinBitrate(value: number) {
    this._perSsidSettings3MinBitrate = value;
  }
  public resetPerSsidSettings3MinBitrate() {
    this._perSsidSettings3MinBitrate = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get perSsidSettings3MinBitrateInput() {
    return this._perSsidSettings3MinBitrate;
  }

  // per_ssid_settings_4_band_operation_mode - computed: false, optional: true, required: false
  private _perSsidSettings4BandOperationMode?: string; 
  public get perSsidSettings4BandOperationMode() {
    return this.getStringAttribute('per_ssid_settings_4_band_operation_mode');
  }
  public set perSsidSettings4BandOperationMode(value: string) {
    this._perSsidSettings4BandOperationMode = value;
  }
  public resetPerSsidSettings4BandOperationMode() {
    this._perSsidSettings4BandOperationMode = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get perSsidSettings4BandOperationModeInput() {
    return this._perSsidSettings4BandOperationMode;
  }

  // per_ssid_settings_4_band_steering_enabled - computed: false, optional: true, required: false
  private _perSsidSettings4BandSteeringEnabled?: boolean | cdktf.IResolvable; 
  public get perSsidSettings4BandSteeringEnabled() {
    return this.getBooleanAttribute('per_ssid_settings_4_band_steering_enabled');
  }
  public set perSsidSettings4BandSteeringEnabled(value: boolean | cdktf.IResolvable) {
    this._perSsidSettings4BandSteeringEnabled = value;
  }
  public resetPerSsidSettings4BandSteeringEnabled() {
    this._perSsidSettings4BandSteeringEnabled = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get perSsidSettings4BandSteeringEnabledInput() {
    return this._perSsidSettings4BandSteeringEnabled;
  }

  // per_ssid_settings_4_bands_enabled - computed: false, optional: true, required: false
  private _perSsidSettings4BandsEnabled?: string[]; 
  public get perSsidSettings4BandsEnabled() {
    return cdktf.Fn.tolist(this.getListAttribute('per_ssid_settings_4_bands_enabled'));
  }
  public set perSsidSettings4BandsEnabled(value: string[]) {
    this._perSsidSettings4BandsEnabled = value;
  }
  public resetPerSsidSettings4BandsEnabled() {
    this._perSsidSettings4BandsEnabled = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get perSsidSettings4BandsEnabledInput() {
    return this._perSsidSettings4BandsEnabled;
  }

  // per_ssid_settings_4_min_bitrate - computed: false, optional: true, required: false
  private _perSsidSettings4MinBitrate?: number; 
  public get perSsidSettings4MinBitrate() {
    return this.getNumberAttribute('per_ssid_settings_4_min_bitrate');
  }
  public set perSsidSettings4MinBitrate(value: number) {
    this._perSsidSettings4MinBitrate = value;
  }
  public resetPerSsidSettings4MinBitrate() {
    this._perSsidSettings4MinBitrate = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get perSsidSettings4MinBitrateInput() {
    return this._perSsidSettings4MinBitrate;
  }

  // per_ssid_settings_5_band_operation_mode - computed: false, optional: true, required: false
  private _perSsidSettings5BandOperationMode?: string; 
  public get perSsidSettings5BandOperationMode() {
    return this.getStringAttribute('per_ssid_settings_5_band_operation_mode');
  }
  public set perSsidSettings5BandOperationMode(value: string) {
    this._perSsidSettings5BandOperationMode = value;
  }
  public resetPerSsidSettings5BandOperationMode() {
    this._perSsidSettings5BandOperationMode = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get perSsidSettings5BandOperationModeInput() {
    return this._perSsidSettings5BandOperationMode;
  }

  // per_ssid_settings_5_band_steering_enabled - computed: false, optional: true, required: false
  private _perSsidSettings5BandSteeringEnabled?: boolean | cdktf.IResolvable; 
  public get perSsidSettings5BandSteeringEnabled() {
    return this.getBooleanAttribute('per_ssid_settings_5_band_steering_enabled');
  }
  public set perSsidSettings5BandSteeringEnabled(value: boolean | cdktf.IResolvable) {
    this._perSsidSettings5BandSteeringEnabled = value;
  }
  public resetPerSsidSettings5BandSteeringEnabled() {
    this._perSsidSettings5BandSteeringEnabled = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get perSsidSettings5BandSteeringEnabledInput() {
    return this._perSsidSettings5BandSteeringEnabled;
  }

  // per_ssid_settings_5_bands_enabled - computed: false, optional: true, required: false
  private _perSsidSettings5BandsEnabled?: string[]; 
  public get perSsidSettings5BandsEnabled() {
    return cdktf.Fn.tolist(this.getListAttribute('per_ssid_settings_5_bands_enabled'));
  }
  public set perSsidSettings5BandsEnabled(value: string[]) {
    this._perSsidSettings5BandsEnabled = value;
  }
  public resetPerSsidSettings5BandsEnabled() {
    this._perSsidSettings5BandsEnabled = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get perSsidSettings5BandsEnabledInput() {
    return this._perSsidSettings5BandsEnabled;
  }

  // per_ssid_settings_5_min_bitrate - computed: false, optional: true, required: false
  private _perSsidSettings5MinBitrate?: number; 
  public get perSsidSettings5MinBitrate() {
    return this.getNumberAttribute('per_ssid_settings_5_min_bitrate');
  }
  public set perSsidSettings5MinBitrate(value: number) {
    this._perSsidSettings5MinBitrate = value;
  }
  public resetPerSsidSettings5MinBitrate() {
    this._perSsidSettings5MinBitrate = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get perSsidSettings5MinBitrateInput() {
    return this._perSsidSettings5MinBitrate;
  }

  // per_ssid_settings_6_band_operation_mode - computed: false, optional: true, required: false
  private _perSsidSettings6BandOperationMode?: string; 
  public get perSsidSettings6BandOperationMode() {
    return this.getStringAttribute('per_ssid_settings_6_band_operation_mode');
  }
  public set perSsidSettings6BandOperationMode(value: string) {
    this._perSsidSettings6BandOperationMode = value;
  }
  public resetPerSsidSettings6BandOperationMode() {
    this._perSsidSettings6BandOperationMode = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get perSsidSettings6BandOperationModeInput() {
    return this._perSsidSettings6BandOperationMode;
  }

  // per_ssid_settings_6_band_steering_enabled - computed: false, optional: true, required: false
  private _perSsidSettings6BandSteeringEnabled?: boolean | cdktf.IResolvable; 
  public get perSsidSettings6BandSteeringEnabled() {
    return this.getBooleanAttribute('per_ssid_settings_6_band_steering_enabled');
  }
  public set perSsidSettings6BandSteeringEnabled(value: boolean | cdktf.IResolvable) {
    this._perSsidSettings6BandSteeringEnabled = value;
  }
  public resetPerSsidSettings6BandSteeringEnabled() {
    this._perSsidSettings6BandSteeringEnabled = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get perSsidSettings6BandSteeringEnabledInput() {
    return this._perSsidSettings6BandSteeringEnabled;
  }

  // per_ssid_settings_6_bands_enabled - computed: false, optional: true, required: false
  private _perSsidSettings6BandsEnabled?: string[]; 
  public get perSsidSettings6BandsEnabled() {
    return cdktf.Fn.tolist(this.getListAttribute('per_ssid_settings_6_bands_enabled'));
  }
  public set perSsidSettings6BandsEnabled(value: string[]) {
    this._perSsidSettings6BandsEnabled = value;
  }
  public resetPerSsidSettings6BandsEnabled() {
    this._perSsidSettings6BandsEnabled = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get perSsidSettings6BandsEnabledInput() {
    return this._perSsidSettings6BandsEnabled;
  }

  // per_ssid_settings_6_min_bitrate - computed: false, optional: true, required: false
  private _perSsidSettings6MinBitrate?: number; 
  public get perSsidSettings6MinBitrate() {
    return this.getNumberAttribute('per_ssid_settings_6_min_bitrate');
  }
  public set perSsidSettings6MinBitrate(value: number) {
    this._perSsidSettings6MinBitrate = value;
  }
  public resetPerSsidSettings6MinBitrate() {
    this._perSsidSettings6MinBitrate = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get perSsidSettings6MinBitrateInput() {
    return this._perSsidSettings6MinBitrate;
  }

  // per_ssid_settings_7_band_operation_mode - computed: false, optional: true, required: false
  private _perSsidSettings7BandOperationMode?: string; 
  public get perSsidSettings7BandOperationMode() {
    return this.getStringAttribute('per_ssid_settings_7_band_operation_mode');
  }
  public set perSsidSettings7BandOperationMode(value: string) {
    this._perSsidSettings7BandOperationMode = value;
  }
  public resetPerSsidSettings7BandOperationMode() {
    this._perSsidSettings7BandOperationMode = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get perSsidSettings7BandOperationModeInput() {
    return this._perSsidSettings7BandOperationMode;
  }

  // per_ssid_settings_7_band_steering_enabled - computed: false, optional: true, required: false
  private _perSsidSettings7BandSteeringEnabled?: boolean | cdktf.IResolvable; 
  public get perSsidSettings7BandSteeringEnabled() {
    return this.getBooleanAttribute('per_ssid_settings_7_band_steering_enabled');
  }
  public set perSsidSettings7BandSteeringEnabled(value: boolean | cdktf.IResolvable) {
    this._perSsidSettings7BandSteeringEnabled = value;
  }
  public resetPerSsidSettings7BandSteeringEnabled() {
    this._perSsidSettings7BandSteeringEnabled = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get perSsidSettings7BandSteeringEnabledInput() {
    return this._perSsidSettings7BandSteeringEnabled;
  }

  // per_ssid_settings_7_bands_enabled - computed: false, optional: true, required: false
  private _perSsidSettings7BandsEnabled?: string[]; 
  public get perSsidSettings7BandsEnabled() {
    return cdktf.Fn.tolist(this.getListAttribute('per_ssid_settings_7_bands_enabled'));
  }
  public set perSsidSettings7BandsEnabled(value: string[]) {
    this._perSsidSettings7BandsEnabled = value;
  }
  public resetPerSsidSettings7BandsEnabled() {
    this._perSsidSettings7BandsEnabled = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get perSsidSettings7BandsEnabledInput() {
    return this._perSsidSettings7BandsEnabled;
  }

  // per_ssid_settings_7_min_bitrate - computed: false, optional: true, required: false
  private _perSsidSettings7MinBitrate?: number; 
  public get perSsidSettings7MinBitrate() {
    return this.getNumberAttribute('per_ssid_settings_7_min_bitrate');
  }
  public set perSsidSettings7MinBitrate(value: number) {
    this._perSsidSettings7MinBitrate = value;
  }
  public resetPerSsidSettings7MinBitrate() {
    this._perSsidSettings7MinBitrate = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get perSsidSettings7MinBitrateInput() {
    return this._perSsidSettings7MinBitrate;
  }

  // per_ssid_settings_8_band_operation_mode - computed: false, optional: true, required: false
  private _perSsidSettings8BandOperationMode?: string; 
  public get perSsidSettings8BandOperationMode() {
    return this.getStringAttribute('per_ssid_settings_8_band_operation_mode');
  }
  public set perSsidSettings8BandOperationMode(value: string) {
    this._perSsidSettings8BandOperationMode = value;
  }
  public resetPerSsidSettings8BandOperationMode() {
    this._perSsidSettings8BandOperationMode = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get perSsidSettings8BandOperationModeInput() {
    return this._perSsidSettings8BandOperationMode;
  }

  // per_ssid_settings_8_band_steering_enabled - computed: false, optional: true, required: false
  private _perSsidSettings8BandSteeringEnabled?: boolean | cdktf.IResolvable; 
  public get perSsidSettings8BandSteeringEnabled() {
    return this.getBooleanAttribute('per_ssid_settings_8_band_steering_enabled');
  }
  public set perSsidSettings8BandSteeringEnabled(value: boolean | cdktf.IResolvable) {
    this._perSsidSettings8BandSteeringEnabled = value;
  }
  public resetPerSsidSettings8BandSteeringEnabled() {
    this._perSsidSettings8BandSteeringEnabled = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get perSsidSettings8BandSteeringEnabledInput() {
    return this._perSsidSettings8BandSteeringEnabled;
  }

  // per_ssid_settings_8_bands_enabled - computed: false, optional: true, required: false
  private _perSsidSettings8BandsEnabled?: string[]; 
  public get perSsidSettings8BandsEnabled() {
    return cdktf.Fn.tolist(this.getListAttribute('per_ssid_settings_8_bands_enabled'));
  }
  public set perSsidSettings8BandsEnabled(value: string[]) {
    this._perSsidSettings8BandsEnabled = value;
  }
  public resetPerSsidSettings8BandsEnabled() {
    this._perSsidSettings8BandsEnabled = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get perSsidSettings8BandsEnabledInput() {
    return this._perSsidSettings8BandsEnabled;
  }

  // per_ssid_settings_8_min_bitrate - computed: false, optional: true, required: false
  private _perSsidSettings8MinBitrate?: number; 
  public get perSsidSettings8MinBitrate() {
    return this.getNumberAttribute('per_ssid_settings_8_min_bitrate');
  }
  public set perSsidSettings8MinBitrate(value: number) {
    this._perSsidSettings8MinBitrate = value;
  }
  public resetPerSsidSettings8MinBitrate() {
    this._perSsidSettings8MinBitrate = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get perSsidSettings8MinBitrateInput() {
    return this._perSsidSettings8MinBitrate;
  }

  // per_ssid_settings_9_band_operation_mode - computed: false, optional: true, required: false
  private _perSsidSettings9BandOperationMode?: string; 
  public get perSsidSettings9BandOperationMode() {
    return this.getStringAttribute('per_ssid_settings_9_band_operation_mode');
  }
  public set perSsidSettings9BandOperationMode(value: string) {
    this._perSsidSettings9BandOperationMode = value;
  }
  public resetPerSsidSettings9BandOperationMode() {
    this._perSsidSettings9BandOperationMode = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get perSsidSettings9BandOperationModeInput() {
    return this._perSsidSettings9BandOperationMode;
  }

  // per_ssid_settings_9_band_steering_enabled - computed: false, optional: true, required: false
  private _perSsidSettings9BandSteeringEnabled?: boolean | cdktf.IResolvable; 
  public get perSsidSettings9BandSteeringEnabled() {
    return this.getBooleanAttribute('per_ssid_settings_9_band_steering_enabled');
  }
  public set perSsidSettings9BandSteeringEnabled(value: boolean | cdktf.IResolvable) {
    this._perSsidSettings9BandSteeringEnabled = value;
  }
  public resetPerSsidSettings9BandSteeringEnabled() {
    this._perSsidSettings9BandSteeringEnabled = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get perSsidSettings9BandSteeringEnabledInput() {
    return this._perSsidSettings9BandSteeringEnabled;
  }

  // per_ssid_settings_9_bands_enabled - computed: false, optional: true, required: false
  private _perSsidSettings9BandsEnabled?: string[]; 
  public get perSsidSettings9BandsEnabled() {
    return cdktf.Fn.tolist(this.getListAttribute('per_ssid_settings_9_bands_enabled'));
  }
  public set perSsidSettings9BandsEnabled(value: string[]) {
    this._perSsidSettings9BandsEnabled = value;
  }
  public resetPerSsidSettings9BandsEnabled() {
    this._perSsidSettings9BandsEnabled = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get perSsidSettings9BandsEnabledInput() {
    return this._perSsidSettings9BandsEnabled;
  }

  // per_ssid_settings_9_min_bitrate - computed: false, optional: true, required: false
  private _perSsidSettings9MinBitrate?: number; 
  public get perSsidSettings9MinBitrate() {
    return this.getNumberAttribute('per_ssid_settings_9_min_bitrate');
  }
  public set perSsidSettings9MinBitrate(value: number) {
    this._perSsidSettings9MinBitrate = value;
  }
  public resetPerSsidSettings9MinBitrate() {
    this._perSsidSettings9MinBitrate = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get perSsidSettings9MinBitrateInput() {
    return this._perSsidSettings9MinBitrate;
  }

  // six_ghz_settings_channel_width - computed: false, optional: true, required: false
  private _sixGhzSettingsChannelWidth?: string; 
  public get sixGhzSettingsChannelWidth() {
    return this.getStringAttribute('six_ghz_settings_channel_width');
  }
  public set sixGhzSettingsChannelWidth(value: string) {
    this._sixGhzSettingsChannelWidth = value;
  }
  public resetSixGhzSettingsChannelWidth() {
    this._sixGhzSettingsChannelWidth = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get sixGhzSettingsChannelWidthInput() {
    return this._sixGhzSettingsChannelWidth;
  }

  // six_ghz_settings_max_power - computed: false, optional: true, required: false
  private _sixGhzSettingsMaxPower?: number; 
  public get sixGhzSettingsMaxPower() {
    return this.getNumberAttribute('six_ghz_settings_max_power');
  }
  public set sixGhzSettingsMaxPower(value: number) {
    this._sixGhzSettingsMaxPower = value;
  }
  public resetSixGhzSettingsMaxPower() {
    this._sixGhzSettingsMaxPower = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get sixGhzSettingsMaxPowerInput() {
    return this._sixGhzSettingsMaxPower;
  }

  // six_ghz_settings_min_bitrate - computed: false, optional: true, required: false
  private _sixGhzSettingsMinBitrate?: number; 
  public get sixGhzSettingsMinBitrate() {
    return this.getNumberAttribute('six_ghz_settings_min_bitrate');
  }
  public set sixGhzSettingsMinBitrate(value: number) {
    this._sixGhzSettingsMinBitrate = value;
  }
  public resetSixGhzSettingsMinBitrate() {
    this._sixGhzSettingsMinBitrate = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get sixGhzSettingsMinBitrateInput() {
    return this._sixGhzSettingsMinBitrate;
  }

  // six_ghz_settings_min_power - computed: false, optional: true, required: false
  private _sixGhzSettingsMinPower?: number; 
  public get sixGhzSettingsMinPower() {
    return this.getNumberAttribute('six_ghz_settings_min_power');
  }
  public set sixGhzSettingsMinPower(value: number) {
    this._sixGhzSettingsMinPower = value;
  }
  public resetSixGhzSettingsMinPower() {
    this._sixGhzSettingsMinPower = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get sixGhzSettingsMinPowerInput() {
    return this._sixGhzSettingsMinPower;
  }

  // six_ghz_settings_rxsop - computed: false, optional: true, required: false
  private _sixGhzSettingsRxsop?: number; 
  public get sixGhzSettingsRxsop() {
    return this.getNumberAttribute('six_ghz_settings_rxsop');
  }
  public set sixGhzSettingsRxsop(value: number) {
    this._sixGhzSettingsRxsop = value;
  }
  public resetSixGhzSettingsRxsop() {
    this._sixGhzSettingsRxsop = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get sixGhzSettingsRxsopInput() {
    return this._sixGhzSettingsRxsop;
  }

  // six_ghz_settings_valid_auto_channels - computed: false, optional: true, required: false
  private _sixGhzSettingsValidAutoChannels?: number[]; 
  public get sixGhzSettingsValidAutoChannels() {
    return cdktf.Token.asNumberList(cdktf.Fn.tolist(this.getNumberListAttribute('six_ghz_settings_valid_auto_channels')));
  }
  public set sixGhzSettingsValidAutoChannels(value: number[]) {
    this._sixGhzSettingsValidAutoChannels = value;
  }
  public resetSixGhzSettingsValidAutoChannels() {
    this._sixGhzSettingsValidAutoChannels = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get sixGhzSettingsValidAutoChannelsInput() {
    return this._sixGhzSettingsValidAutoChannels;
  }

  // transmission_enabled - computed: false, optional: true, required: false
  private _transmissionEnabled?: boolean | cdktf.IResolvable; 
  public get transmissionEnabled() {
    return this.getBooleanAttribute('transmission_enabled');
  }
  public set transmissionEnabled(value: boolean | cdktf.IResolvable) {
    this._transmissionEnabled = value;
  }
  public resetTransmissionEnabled() {
    this._transmissionEnabled = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get transmissionEnabledInput() {
    return this._transmissionEnabled;
  }

  // two_four_ghz_settings_ax_enabled - computed: false, optional: true, required: false
  private _twoFourGhzSettingsAxEnabled?: boolean | cdktf.IResolvable; 
  public get twoFourGhzSettingsAxEnabled() {
    return this.getBooleanAttribute('two_four_ghz_settings_ax_enabled');
  }
  public set twoFourGhzSettingsAxEnabled(value: boolean | cdktf.IResolvable) {
    this._twoFourGhzSettingsAxEnabled = value;
  }
  public resetTwoFourGhzSettingsAxEnabled() {
    this._twoFourGhzSettingsAxEnabled = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get twoFourGhzSettingsAxEnabledInput() {
    return this._twoFourGhzSettingsAxEnabled;
  }

  // two_four_ghz_settings_max_power - computed: false, optional: true, required: false
  private _twoFourGhzSettingsMaxPower?: number; 
  public get twoFourGhzSettingsMaxPower() {
    return this.getNumberAttribute('two_four_ghz_settings_max_power');
  }
  public set twoFourGhzSettingsMaxPower(value: number) {
    this._twoFourGhzSettingsMaxPower = value;
  }
  public resetTwoFourGhzSettingsMaxPower() {
    this._twoFourGhzSettingsMaxPower = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get twoFourGhzSettingsMaxPowerInput() {
    return this._twoFourGhzSettingsMaxPower;
  }

  // two_four_ghz_settings_min_bitrate - computed: false, optional: true, required: false
  private _twoFourGhzSettingsMinBitrate?: number; 
  public get twoFourGhzSettingsMinBitrate() {
    return this.getNumberAttribute('two_four_ghz_settings_min_bitrate');
  }
  public set twoFourGhzSettingsMinBitrate(value: number) {
    this._twoFourGhzSettingsMinBitrate = value;
  }
  public resetTwoFourGhzSettingsMinBitrate() {
    this._twoFourGhzSettingsMinBitrate = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get twoFourGhzSettingsMinBitrateInput() {
    return this._twoFourGhzSettingsMinBitrate;
  }

  // two_four_ghz_settings_min_power - computed: false, optional: true, required: false
  private _twoFourGhzSettingsMinPower?: number; 
  public get twoFourGhzSettingsMinPower() {
    return this.getNumberAttribute('two_four_ghz_settings_min_power');
  }
  public set twoFourGhzSettingsMinPower(value: number) {
    this._twoFourGhzSettingsMinPower = value;
  }
  public resetTwoFourGhzSettingsMinPower() {
    this._twoFourGhzSettingsMinPower = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get twoFourGhzSettingsMinPowerInput() {
    return this._twoFourGhzSettingsMinPower;
  }

  // two_four_ghz_settings_rxsop - computed: false, optional: true, required: false
  private _twoFourGhzSettingsRxsop?: number; 
  public get twoFourGhzSettingsRxsop() {
    return this.getNumberAttribute('two_four_ghz_settings_rxsop');
  }
  public set twoFourGhzSettingsRxsop(value: number) {
    this._twoFourGhzSettingsRxsop = value;
  }
  public resetTwoFourGhzSettingsRxsop() {
    this._twoFourGhzSettingsRxsop = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get twoFourGhzSettingsRxsopInput() {
    return this._twoFourGhzSettingsRxsop;
  }

  // two_four_ghz_settings_valid_auto_channels - computed: false, optional: true, required: false
  private _twoFourGhzSettingsValidAutoChannels?: number[]; 
  public get twoFourGhzSettingsValidAutoChannels() {
    return cdktf.Token.asNumberList(cdktf.Fn.tolist(this.getNumberListAttribute('two_four_ghz_settings_valid_auto_channels')));
  }
  public set twoFourGhzSettingsValidAutoChannels(value: number[]) {
    this._twoFourGhzSettingsValidAutoChannels = value;
  }
  public resetTwoFourGhzSettingsValidAutoChannels() {
    this._twoFourGhzSettingsValidAutoChannels = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get twoFourGhzSettingsValidAutoChannelsInput() {
    return this._twoFourGhzSettingsValidAutoChannels;
  }
}

export class WirelessRfProfilesItemsList extends cdktf.ComplexList {
  public internalValue? : WirelessRfProfilesItems[] | cdktf.IResolvable

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  * @param wrapsSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
  */
  constructor(protected terraformResource: cdktf.IInterpolatingParent, protected terraformAttribute: string, protected wrapsSet: boolean) {
    super(terraformResource, terraformAttribute, wrapsSet)
  }

  /**
  * @param index the index of the item to return
  */
  public get(index: number): WirelessRfProfilesItemsOutputReference {
    return new WirelessRfProfilesItemsOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}

/**
* Represents a {@link https://registry.terraform.io/providers/ciscodevnet/meraki/1.7.1/docs/resources/wireless_rf_profiles meraki_wireless_rf_profiles}
*/
export class WirelessRfProfiles extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "meraki_wireless_rf_profiles";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a WirelessRfProfiles resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the WirelessRfProfiles to import
  * @param importFromId The id of the existing WirelessRfProfiles that should be imported. Refer to the {@link https://registry.terraform.io/providers/ciscodevnet/meraki/1.7.1/docs/resources/wireless_rf_profiles#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the WirelessRfProfiles to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "meraki_wireless_rf_profiles", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/ciscodevnet/meraki/1.7.1/docs/resources/wireless_rf_profiles meraki_wireless_rf_profiles} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options WirelessRfProfilesConfig
  */
  public constructor(scope: Construct, id: string, config: WirelessRfProfilesConfig) {
    super(scope, id, {
      terraformResourceType: 'meraki_wireless_rf_profiles',
      terraformGeneratorMetadata: {
        providerName: 'meraki',
        providerVersion: '1.7.1'
      },
      provider: config.provider,
      dependsOn: config.dependsOn,
      count: config.count,
      lifecycle: config.lifecycle,
      provisioners: config.provisioners,
      connection: config.connection,
      forEach: config.forEach
    });
    this._items.internalValue = config.items;
    this._networkId = config.networkId;
    this._organizationId = config.organizationId;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // id - computed: true, optional: false, required: false
  public get id() {
    return this.getStringAttribute('id');
  }

  // items - computed: false, optional: false, required: true
  private _items = new WirelessRfProfilesItemsList(this, "items", true);
  public get items() {
    return this._items;
  }
  public putItems(value: WirelessRfProfilesItems[] | cdktf.IResolvable) {
    this._items.internalValue = value;
  }
  // Temporarily expose input value. Use with caution.
  public get itemsInput() {
    return this._items.internalValue;
  }

  // network_id - computed: false, optional: false, required: true
  private _networkId?: string; 
  public get networkId() {
    return this.getStringAttribute('network_id');
  }
  public set networkId(value: string) {
    this._networkId = value;
  }
  // Temporarily expose input value. Use with caution.
  public get networkIdInput() {
    return this._networkId;
  }

  // organization_id - computed: false, optional: false, required: true
  private _organizationId?: string; 
  public get organizationId() {
    return this.getStringAttribute('organization_id');
  }
  public set organizationId(value: string) {
    this._organizationId = value;
  }
  // Temporarily expose input value. Use with caution.
  public get organizationIdInput() {
    return this._organizationId;
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      items: cdktf.listMapper(wirelessRfProfilesItemsToTerraform, false)(this._items.internalValue),
      network_id: cdktf.stringToTerraform(this._networkId),
      organization_id: cdktf.stringToTerraform(this._organizationId),
    };
  }

  protected synthesizeHclAttributes(): { [name: string]: any } {
    const attrs = {
      items: {
        value: cdktf.listMapperHcl(wirelessRfProfilesItemsToHclTerraform, false)(this._items.internalValue),
        isBlock: true,
        type: "set",
        storageClassType: "WirelessRfProfilesItemsList",
      },
      network_id: {
        value: cdktf.stringToHclTerraform(this._networkId),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      organization_id: {
        value: cdktf.stringToHclTerraform(this._organizationId),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
