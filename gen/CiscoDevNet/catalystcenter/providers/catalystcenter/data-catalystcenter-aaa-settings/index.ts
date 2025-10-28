// https://registry.terraform.io/providers/ciscodevnet/catalystcenter/0.4.0/docs/data-sources/aaa_settings
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface DataCatalystcenterAaaSettingsConfig extends cdktf.TerraformMetaArguments {
  /**
  * The site ID
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/catalystcenter/0.4.0/docs/data-sources/aaa_settings#site_id DataCatalystcenterAaaSettings#site_id}
  */
  readonly siteId: string;
}

/**
* Represents a {@link https://registry.terraform.io/providers/ciscodevnet/catalystcenter/0.4.0/docs/data-sources/aaa_settings catalystcenter_aaa_settings}
*/
export class DataCatalystcenterAaaSettings extends cdktf.TerraformDataSource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "catalystcenter_aaa_settings";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a DataCatalystcenterAaaSettings resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the DataCatalystcenterAaaSettings to import
  * @param importFromId The id of the existing DataCatalystcenterAaaSettings that should be imported. Refer to the {@link https://registry.terraform.io/providers/ciscodevnet/catalystcenter/0.4.0/docs/data-sources/aaa_settings#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the DataCatalystcenterAaaSettings to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "catalystcenter_aaa_settings", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/ciscodevnet/catalystcenter/0.4.0/docs/data-sources/aaa_settings catalystcenter_aaa_settings} Data Source
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options DataCatalystcenterAaaSettingsConfig
  */
  public constructor(scope: Construct, id: string, config: DataCatalystcenterAaaSettingsConfig) {
    super(scope, id, {
      terraformResourceType: 'catalystcenter_aaa_settings',
      terraformGeneratorMetadata: {
        providerName: 'catalystcenter',
        providerVersion: '0.4.0'
      },
      provider: config.provider,
      dependsOn: config.dependsOn,
      count: config.count,
      lifecycle: config.lifecycle,
      provisioners: config.provisioners,
      connection: config.connection,
      forEach: config.forEach
    });
    this._siteId = config.siteId;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // client_aaa_pan - computed: true, optional: false, required: false
  public get clientAaaPan() {
    return this.getStringAttribute('client_aaa_pan');
  }

  // client_aaa_primary_server_ip - computed: true, optional: false, required: false
  public get clientAaaPrimaryServerIp() {
    return this.getStringAttribute('client_aaa_primary_server_ip');
  }

  // client_aaa_protocol - computed: true, optional: false, required: false
  public get clientAaaProtocol() {
    return this.getStringAttribute('client_aaa_protocol');
  }

  // client_aaa_secondary_server_ip - computed: true, optional: false, required: false
  public get clientAaaSecondaryServerIp() {
    return this.getStringAttribute('client_aaa_secondary_server_ip');
  }

  // client_aaa_server_type - computed: true, optional: false, required: false
  public get clientAaaServerType() {
    return this.getStringAttribute('client_aaa_server_type');
  }

  // client_aaa_shared_secret - computed: true, optional: false, required: false
  public get clientAaaSharedSecret() {
    return this.getStringAttribute('client_aaa_shared_secret');
  }

  // id - computed: true, optional: false, required: false
  public get id() {
    return this.getStringAttribute('id');
  }

  // network_aaa_pan - computed: true, optional: false, required: false
  public get networkAaaPan() {
    return this.getStringAttribute('network_aaa_pan');
  }

  // network_aaa_primary_server_ip - computed: true, optional: false, required: false
  public get networkAaaPrimaryServerIp() {
    return this.getStringAttribute('network_aaa_primary_server_ip');
  }

  // network_aaa_protocol - computed: true, optional: false, required: false
  public get networkAaaProtocol() {
    return this.getStringAttribute('network_aaa_protocol');
  }

  // network_aaa_secondary_server_ip - computed: true, optional: false, required: false
  public get networkAaaSecondaryServerIp() {
    return this.getStringAttribute('network_aaa_secondary_server_ip');
  }

  // network_aaa_server_type - computed: true, optional: false, required: false
  public get networkAaaServerType() {
    return this.getStringAttribute('network_aaa_server_type');
  }

  // network_aaa_shared_secret - computed: true, optional: false, required: false
  public get networkAaaSharedSecret() {
    return this.getStringAttribute('network_aaa_shared_secret');
  }

  // site_id - computed: false, optional: false, required: true
  private _siteId?: string; 
  public get siteId() {
    return this.getStringAttribute('site_id');
  }
  public set siteId(value: string) {
    this._siteId = value;
  }
  // Temporarily expose input value. Use with caution.
  public get siteIdInput() {
    return this._siteId;
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      site_id: cdktf.stringToTerraform(this._siteId),
    };
  }

  protected synthesizeHclAttributes(): { [name: string]: any } {
    const attrs = {
      site_id: {
        value: cdktf.stringToHclTerraform(this._siteId),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
