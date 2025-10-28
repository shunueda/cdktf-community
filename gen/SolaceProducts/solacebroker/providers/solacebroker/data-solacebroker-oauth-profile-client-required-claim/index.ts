// https://registry.terraform.io/providers/solaceproducts/solacebroker/1.2.0/docs/data-sources/oauth_profile_client_required_claim
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface DataSolacebrokerOauthProfileClientRequiredClaimConfig extends cdktf.TerraformMetaArguments {
  /**
  * The name of the ID token claim to verify.
  * 
  * The minimum access scope/level required to retrieve this attribute is "global/read-only".
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/solaceproducts/solacebroker/1.2.0/docs/data-sources/oauth_profile_client_required_claim#client_required_claim_name DataSolacebrokerOauthProfileClientRequiredClaim#client_required_claim_name}
  */
  readonly clientRequiredClaimName: string;
  /**
  * The name of the OAuth profile.
  * 
  * The minimum access scope/level required to retrieve this attribute is "global/read-only".
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/solaceproducts/solacebroker/1.2.0/docs/data-sources/oauth_profile_client_required_claim#oauth_profile_name DataSolacebrokerOauthProfileClientRequiredClaim#oauth_profile_name}
  */
  readonly oauthProfileName: string;
}

/**
* Represents a {@link https://registry.terraform.io/providers/solaceproducts/solacebroker/1.2.0/docs/data-sources/oauth_profile_client_required_claim solacebroker_oauth_profile_client_required_claim}
*/
export class DataSolacebrokerOauthProfileClientRequiredClaim extends cdktf.TerraformDataSource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "solacebroker_oauth_profile_client_required_claim";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a DataSolacebrokerOauthProfileClientRequiredClaim resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the DataSolacebrokerOauthProfileClientRequiredClaim to import
  * @param importFromId The id of the existing DataSolacebrokerOauthProfileClientRequiredClaim that should be imported. Refer to the {@link https://registry.terraform.io/providers/solaceproducts/solacebroker/1.2.0/docs/data-sources/oauth_profile_client_required_claim#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the DataSolacebrokerOauthProfileClientRequiredClaim to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "solacebroker_oauth_profile_client_required_claim", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/solaceproducts/solacebroker/1.2.0/docs/data-sources/oauth_profile_client_required_claim solacebroker_oauth_profile_client_required_claim} Data Source
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options DataSolacebrokerOauthProfileClientRequiredClaimConfig
  */
  public constructor(scope: Construct, id: string, config: DataSolacebrokerOauthProfileClientRequiredClaimConfig) {
    super(scope, id, {
      terraformResourceType: 'solacebroker_oauth_profile_client_required_claim',
      terraformGeneratorMetadata: {
        providerName: 'solacebroker',
        providerVersion: '1.2.0'
      },
      provider: config.provider,
      dependsOn: config.dependsOn,
      count: config.count,
      lifecycle: config.lifecycle,
      provisioners: config.provisioners,
      connection: config.connection,
      forEach: config.forEach
    });
    this._clientRequiredClaimName = config.clientRequiredClaimName;
    this._oauthProfileName = config.oauthProfileName;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // client_required_claim_name - computed: false, optional: false, required: true
  private _clientRequiredClaimName?: string; 
  public get clientRequiredClaimName() {
    return this.getStringAttribute('client_required_claim_name');
  }
  public set clientRequiredClaimName(value: string) {
    this._clientRequiredClaimName = value;
  }
  // Temporarily expose input value. Use with caution.
  public get clientRequiredClaimNameInput() {
    return this._clientRequiredClaimName;
  }

  // client_required_claim_value - computed: true, optional: false, required: false
  public get clientRequiredClaimValue() {
    return this.getStringAttribute('client_required_claim_value');
  }

  // oauth_profile_name - computed: false, optional: false, required: true
  private _oauthProfileName?: string; 
  public get oauthProfileName() {
    return this.getStringAttribute('oauth_profile_name');
  }
  public set oauthProfileName(value: string) {
    this._oauthProfileName = value;
  }
  // Temporarily expose input value. Use with caution.
  public get oauthProfileNameInput() {
    return this._oauthProfileName;
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      client_required_claim_name: cdktf.stringToTerraform(this._clientRequiredClaimName),
      oauth_profile_name: cdktf.stringToTerraform(this._oauthProfileName),
    };
  }

  protected synthesizeHclAttributes(): { [name: string]: any } {
    const attrs = {
      client_required_claim_name: {
        value: cdktf.stringToHclTerraform(this._clientRequiredClaimName),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      oauth_profile_name: {
        value: cdktf.stringToHclTerraform(this._oauthProfileName),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
