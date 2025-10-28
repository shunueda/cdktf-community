// https://registry.terraform.io/providers/pingidentity/pingone/1.13.0/docs/data-sources/mfa_device_policies
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface DataPingoneMfaDevicePoliciesConfig extends cdktf.TerraformMetaArguments {
  /**
  * The ID of the environment to select MFA device policies from.  Must be a valid PingOne resource ID.  This field is immutable and will trigger a replace plan if changed.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/pingidentity/pingone/1.13.0/docs/data-sources/mfa_device_policies#environment_id DataPingoneMfaDevicePolicies#environment_id}
  */
  readonly environmentId: string;
}

/**
* Represents a {@link https://registry.terraform.io/providers/pingidentity/pingone/1.13.0/docs/data-sources/mfa_device_policies pingone_mfa_device_policies}
*/
export class DataPingoneMfaDevicePolicies extends cdktf.TerraformDataSource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "pingone_mfa_device_policies";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a DataPingoneMfaDevicePolicies resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the DataPingoneMfaDevicePolicies to import
  * @param importFromId The id of the existing DataPingoneMfaDevicePolicies that should be imported. Refer to the {@link https://registry.terraform.io/providers/pingidentity/pingone/1.13.0/docs/data-sources/mfa_device_policies#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the DataPingoneMfaDevicePolicies to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "pingone_mfa_device_policies", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/pingidentity/pingone/1.13.0/docs/data-sources/mfa_device_policies pingone_mfa_device_policies} Data Source
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options DataPingoneMfaDevicePoliciesConfig
  */
  public constructor(scope: Construct, id: string, config: DataPingoneMfaDevicePoliciesConfig) {
    super(scope, id, {
      terraformResourceType: 'pingone_mfa_device_policies',
      terraformGeneratorMetadata: {
        providerName: 'pingone',
        providerVersion: '1.13.0'
      },
      provider: config.provider,
      dependsOn: config.dependsOn,
      count: config.count,
      lifecycle: config.lifecycle,
      provisioners: config.provisioners,
      connection: config.connection,
      forEach: config.forEach
    });
    this._environmentId = config.environmentId;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // environment_id - computed: false, optional: false, required: true
  private _environmentId?: string; 
  public get environmentId() {
    return this.getStringAttribute('environment_id');
  }
  public set environmentId(value: string) {
    this._environmentId = value;
  }
  // Temporarily expose input value. Use with caution.
  public get environmentIdInput() {
    return this._environmentId;
  }

  // id - computed: true, optional: false, required: false
  public get id() {
    return this.getStringAttribute('id');
  }

  // ids - computed: true, optional: false, required: false
  public get ids() {
    return this.getListAttribute('ids');
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      environment_id: cdktf.stringToTerraform(this._environmentId),
    };
  }

  protected synthesizeHclAttributes(): { [name: string]: any } {
    const attrs = {
      environment_id: {
        value: cdktf.stringToHclTerraform(this._environmentId),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
