// https://registry.terraform.io/providers/ciscodevnet/meraki/1.7.1/docs/data-sources/appliance_radio_settings
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface DataMerakiApplianceRadioSettingsConfig extends cdktf.TerraformMetaArguments {
  /**
  * Device serial
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/meraki/1.7.1/docs/data-sources/appliance_radio_settings#serial DataMerakiApplianceRadioSettings#serial}
  */
  readonly serial: string;
}

/**
* Represents a {@link https://registry.terraform.io/providers/ciscodevnet/meraki/1.7.1/docs/data-sources/appliance_radio_settings meraki_appliance_radio_settings}
*/
export class DataMerakiApplianceRadioSettings extends cdktf.TerraformDataSource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "meraki_appliance_radio_settings";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a DataMerakiApplianceRadioSettings resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the DataMerakiApplianceRadioSettings to import
  * @param importFromId The id of the existing DataMerakiApplianceRadioSettings that should be imported. Refer to the {@link https://registry.terraform.io/providers/ciscodevnet/meraki/1.7.1/docs/data-sources/appliance_radio_settings#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the DataMerakiApplianceRadioSettings to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "meraki_appliance_radio_settings", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/ciscodevnet/meraki/1.7.1/docs/data-sources/appliance_radio_settings meraki_appliance_radio_settings} Data Source
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options DataMerakiApplianceRadioSettingsConfig
  */
  public constructor(scope: Construct, id: string, config: DataMerakiApplianceRadioSettingsConfig) {
    super(scope, id, {
      terraformResourceType: 'meraki_appliance_radio_settings',
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
    this._serial = config.serial;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // five_ghz_settings_channel - computed: true, optional: false, required: false
  public get fiveGhzSettingsChannel() {
    return this.getNumberAttribute('five_ghz_settings_channel');
  }

  // five_ghz_settings_channel_width - computed: true, optional: false, required: false
  public get fiveGhzSettingsChannelWidth() {
    return this.getNumberAttribute('five_ghz_settings_channel_width');
  }

  // five_ghz_settings_target_power - computed: true, optional: false, required: false
  public get fiveGhzSettingsTargetPower() {
    return this.getNumberAttribute('five_ghz_settings_target_power');
  }

  // id - computed: true, optional: false, required: false
  public get id() {
    return this.getStringAttribute('id');
  }

  // rf_profile_id - computed: true, optional: false, required: false
  public get rfProfileId() {
    return this.getStringAttribute('rf_profile_id');
  }

  // serial - computed: false, optional: false, required: true
  private _serial?: string; 
  public get serial() {
    return this.getStringAttribute('serial');
  }
  public set serial(value: string) {
    this._serial = value;
  }
  // Temporarily expose input value. Use with caution.
  public get serialInput() {
    return this._serial;
  }

  // two_four_ghz_settings_channel - computed: true, optional: false, required: false
  public get twoFourGhzSettingsChannel() {
    return this.getNumberAttribute('two_four_ghz_settings_channel');
  }

  // two_four_ghz_settings_target_power - computed: true, optional: false, required: false
  public get twoFourGhzSettingsTargetPower() {
    return this.getNumberAttribute('two_four_ghz_settings_target_power');
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      serial: cdktf.stringToTerraform(this._serial),
    };
  }

  protected synthesizeHclAttributes(): { [name: string]: any } {
    const attrs = {
      serial: {
        value: cdktf.stringToHclTerraform(this._serial),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
