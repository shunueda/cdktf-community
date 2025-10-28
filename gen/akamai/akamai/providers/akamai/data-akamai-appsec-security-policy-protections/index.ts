// https://registry.terraform.io/providers/akamai/akamai/9.1.0/docs/data-sources/appsec_security_policy_protections
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface DataAkamaiAppsecSecurityPolicyProtectionsConfig extends cdktf.TerraformMetaArguments {
  /**
  * Unique identifier of the security configuration
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/akamai/akamai/9.1.0/docs/data-sources/appsec_security_policy_protections#config_id DataAkamaiAppsecSecurityPolicyProtections#config_id}
  */
  readonly configId: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/akamai/akamai/9.1.0/docs/data-sources/appsec_security_policy_protections#id DataAkamaiAppsecSecurityPolicyProtections#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: string;
  /**
  * Unique identifier of the security policy
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/akamai/akamai/9.1.0/docs/data-sources/appsec_security_policy_protections#security_policy_id DataAkamaiAppsecSecurityPolicyProtections#security_policy_id}
  */
  readonly securityPolicyId: string;
}

/**
* Represents a {@link https://registry.terraform.io/providers/akamai/akamai/9.1.0/docs/data-sources/appsec_security_policy_protections akamai_appsec_security_policy_protections}
*/
export class DataAkamaiAppsecSecurityPolicyProtections extends cdktf.TerraformDataSource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "akamai_appsec_security_policy_protections";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a DataAkamaiAppsecSecurityPolicyProtections resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the DataAkamaiAppsecSecurityPolicyProtections to import
  * @param importFromId The id of the existing DataAkamaiAppsecSecurityPolicyProtections that should be imported. Refer to the {@link https://registry.terraform.io/providers/akamai/akamai/9.1.0/docs/data-sources/appsec_security_policy_protections#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the DataAkamaiAppsecSecurityPolicyProtections to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "akamai_appsec_security_policy_protections", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/akamai/akamai/9.1.0/docs/data-sources/appsec_security_policy_protections akamai_appsec_security_policy_protections} Data Source
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options DataAkamaiAppsecSecurityPolicyProtectionsConfig
  */
  public constructor(scope: Construct, id: string, config: DataAkamaiAppsecSecurityPolicyProtectionsConfig) {
    super(scope, id, {
      terraformResourceType: 'akamai_appsec_security_policy_protections',
      terraformGeneratorMetadata: {
        providerName: 'akamai',
        providerVersion: '9.1.0'
      },
      provider: config.provider,
      dependsOn: config.dependsOn,
      count: config.count,
      lifecycle: config.lifecycle,
      provisioners: config.provisioners,
      connection: config.connection,
      forEach: config.forEach
    });
    this._configId = config.configId;
    this._id = config.id;
    this._securityPolicyId = config.securityPolicyId;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // apply_api_constraints - computed: true, optional: false, required: false
  public get applyApiConstraints() {
    return this.getBooleanAttribute('apply_api_constraints');
  }

  // apply_application_layer_controls - computed: true, optional: false, required: false
  public get applyApplicationLayerControls() {
    return this.getBooleanAttribute('apply_application_layer_controls');
  }

  // apply_botman_controls - computed: true, optional: false, required: false
  public get applyBotmanControls() {
    return this.getBooleanAttribute('apply_botman_controls');
  }

  // apply_malware_controls - computed: true, optional: false, required: false
  public get applyMalwareControls() {
    return this.getBooleanAttribute('apply_malware_controls');
  }

  // apply_network_layer_controls - computed: true, optional: false, required: false
  public get applyNetworkLayerControls() {
    return this.getBooleanAttribute('apply_network_layer_controls');
  }

  // apply_rate_controls - computed: true, optional: false, required: false
  public get applyRateControls() {
    return this.getBooleanAttribute('apply_rate_controls');
  }

  // apply_reputation_controls - computed: true, optional: false, required: false
  public get applyReputationControls() {
    return this.getBooleanAttribute('apply_reputation_controls');
  }

  // apply_slow_post_controls - computed: true, optional: false, required: false
  public get applySlowPostControls() {
    return this.getBooleanAttribute('apply_slow_post_controls');
  }

  // config_id - computed: false, optional: false, required: true
  private _configId?: number; 
  public get configId() {
    return this.getNumberAttribute('config_id');
  }
  public set configId(value: number) {
    this._configId = value;
  }
  // Temporarily expose input value. Use with caution.
  public get configIdInput() {
    return this._configId;
  }

  // id - computed: true, optional: true, required: false
  private _id?: string; 
  public get id() {
    return this.getStringAttribute('id');
  }
  public set id(value: string) {
    this._id = value;
  }
  public resetId() {
    this._id = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get idInput() {
    return this._id;
  }

  // json - computed: true, optional: false, required: false
  public get json() {
    return this.getStringAttribute('json');
  }

  // output_text - computed: true, optional: false, required: false
  public get outputText() {
    return this.getStringAttribute('output_text');
  }

  // security_policy_id - computed: false, optional: false, required: true
  private _securityPolicyId?: string; 
  public get securityPolicyId() {
    return this.getStringAttribute('security_policy_id');
  }
  public set securityPolicyId(value: string) {
    this._securityPolicyId = value;
  }
  // Temporarily expose input value. Use with caution.
  public get securityPolicyIdInput() {
    return this._securityPolicyId;
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      config_id: cdktf.numberToTerraform(this._configId),
      id: cdktf.stringToTerraform(this._id),
      security_policy_id: cdktf.stringToTerraform(this._securityPolicyId),
    };
  }

  protected synthesizeHclAttributes(): { [name: string]: any } {
    const attrs = {
      config_id: {
        value: cdktf.numberToHclTerraform(this._configId),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      id: {
        value: cdktf.stringToHclTerraform(this._id),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      security_policy_id: {
        value: cdktf.stringToHclTerraform(this._securityPolicyId),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
