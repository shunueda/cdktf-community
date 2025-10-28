// https://registry.terraform.io/providers/cockroachdb/cockroach/1.15.2/docs/resources/version_deferral
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface VersionDeferralConfig extends cdktf.TerraformMetaArguments {
  /**
  * The policy for managing automated minor version upgrades. Set to FIXED_DEFERRAL to defer upgrades by 60 days or NOT_DEFERRED to apply upgrades immediately.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cockroachdb/cockroach/1.15.2/docs/resources/version_deferral#deferral_policy VersionDeferral#deferral_policy}
  */
  readonly deferralPolicy: string;
  /**
  * Cluster ID.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cockroachdb/cockroach/1.15.2/docs/resources/version_deferral#id VersionDeferral#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id: string;
}

/**
* Represents a {@link https://registry.terraform.io/providers/cockroachdb/cockroach/1.15.2/docs/resources/version_deferral cockroach_version_deferral}
*/
export class VersionDeferral extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "cockroach_version_deferral";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a VersionDeferral resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the VersionDeferral to import
  * @param importFromId The id of the existing VersionDeferral that should be imported. Refer to the {@link https://registry.terraform.io/providers/cockroachdb/cockroach/1.15.2/docs/resources/version_deferral#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the VersionDeferral to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "cockroach_version_deferral", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/cockroachdb/cockroach/1.15.2/docs/resources/version_deferral cockroach_version_deferral} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options VersionDeferralConfig
  */
  public constructor(scope: Construct, id: string, config: VersionDeferralConfig) {
    super(scope, id, {
      terraformResourceType: 'cockroach_version_deferral',
      terraformGeneratorMetadata: {
        providerName: 'cockroach',
        providerVersion: '1.15.2'
      },
      provider: config.provider,
      dependsOn: config.dependsOn,
      count: config.count,
      lifecycle: config.lifecycle,
      provisioners: config.provisioners,
      connection: config.connection,
      forEach: config.forEach
    });
    this._deferralPolicy = config.deferralPolicy;
    this._id = config.id;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // deferral_policy - computed: false, optional: false, required: true
  private _deferralPolicy?: string; 
  public get deferralPolicy() {
    return this.getStringAttribute('deferral_policy');
  }
  public set deferralPolicy(value: string) {
    this._deferralPolicy = value;
  }
  // Temporarily expose input value. Use with caution.
  public get deferralPolicyInput() {
    return this._deferralPolicy;
  }

  // id - computed: false, optional: false, required: true
  private _id?: string; 
  public get id() {
    return this.getStringAttribute('id');
  }
  public set id(value: string) {
    this._id = value;
  }
  // Temporarily expose input value. Use with caution.
  public get idInput() {
    return this._id;
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      deferral_policy: cdktf.stringToTerraform(this._deferralPolicy),
      id: cdktf.stringToTerraform(this._id),
    };
  }

  protected synthesizeHclAttributes(): { [name: string]: any } {
    const attrs = {
      deferral_policy: {
        value: cdktf.stringToHclTerraform(this._deferralPolicy),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      id: {
        value: cdktf.stringToHclTerraform(this._id),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
