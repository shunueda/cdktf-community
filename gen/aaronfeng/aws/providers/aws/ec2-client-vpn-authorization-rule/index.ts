// https://registry.terraform.io/providers/aaronfeng/aws/3.29.6/docs/resources/ec2_client_vpn_authorization_rule
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface Ec2ClientVpnAuthorizationRuleConfig extends cdktf.TerraformMetaArguments {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aaronfeng/aws/3.29.6/docs/resources/ec2_client_vpn_authorization_rule#access_group_id Ec2ClientVpnAuthorizationRule#access_group_id}
  */
  readonly accessGroupId?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aaronfeng/aws/3.29.6/docs/resources/ec2_client_vpn_authorization_rule#authorize_all_groups Ec2ClientVpnAuthorizationRule#authorize_all_groups}
  */
  readonly authorizeAllGroups?: boolean | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aaronfeng/aws/3.29.6/docs/resources/ec2_client_vpn_authorization_rule#client_vpn_endpoint_id Ec2ClientVpnAuthorizationRule#client_vpn_endpoint_id}
  */
  readonly clientVpnEndpointId: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aaronfeng/aws/3.29.6/docs/resources/ec2_client_vpn_authorization_rule#description Ec2ClientVpnAuthorizationRule#description}
  */
  readonly description?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aaronfeng/aws/3.29.6/docs/resources/ec2_client_vpn_authorization_rule#id Ec2ClientVpnAuthorizationRule#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aaronfeng/aws/3.29.6/docs/resources/ec2_client_vpn_authorization_rule#target_network_cidr Ec2ClientVpnAuthorizationRule#target_network_cidr}
  */
  readonly targetNetworkCidr: string;
}

/**
* Represents a {@link https://registry.terraform.io/providers/aaronfeng/aws/3.29.6/docs/resources/ec2_client_vpn_authorization_rule aws_ec2_client_vpn_authorization_rule}
*/
export class Ec2ClientVpnAuthorizationRule extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "aws_ec2_client_vpn_authorization_rule";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a Ec2ClientVpnAuthorizationRule resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the Ec2ClientVpnAuthorizationRule to import
  * @param importFromId The id of the existing Ec2ClientVpnAuthorizationRule that should be imported. Refer to the {@link https://registry.terraform.io/providers/aaronfeng/aws/3.29.6/docs/resources/ec2_client_vpn_authorization_rule#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the Ec2ClientVpnAuthorizationRule to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "aws_ec2_client_vpn_authorization_rule", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/aaronfeng/aws/3.29.6/docs/resources/ec2_client_vpn_authorization_rule aws_ec2_client_vpn_authorization_rule} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options Ec2ClientVpnAuthorizationRuleConfig
  */
  public constructor(scope: Construct, id: string, config: Ec2ClientVpnAuthorizationRuleConfig) {
    super(scope, id, {
      terraformResourceType: 'aws_ec2_client_vpn_authorization_rule',
      terraformGeneratorMetadata: {
        providerName: 'aws',
        providerVersion: '3.29.6'
      },
      provider: config.provider,
      dependsOn: config.dependsOn,
      count: config.count,
      lifecycle: config.lifecycle,
      provisioners: config.provisioners,
      connection: config.connection,
      forEach: config.forEach
    });
    this._accessGroupId = config.accessGroupId;
    this._authorizeAllGroups = config.authorizeAllGroups;
    this._clientVpnEndpointId = config.clientVpnEndpointId;
    this._description = config.description;
    this._id = config.id;
    this._targetNetworkCidr = config.targetNetworkCidr;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // access_group_id - computed: false, optional: true, required: false
  private _accessGroupId?: string; 
  public get accessGroupId() {
    return this.getStringAttribute('access_group_id');
  }
  public set accessGroupId(value: string) {
    this._accessGroupId = value;
  }
  public resetAccessGroupId() {
    this._accessGroupId = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get accessGroupIdInput() {
    return this._accessGroupId;
  }

  // authorize_all_groups - computed: false, optional: true, required: false
  private _authorizeAllGroups?: boolean | cdktf.IResolvable; 
  public get authorizeAllGroups() {
    return this.getBooleanAttribute('authorize_all_groups');
  }
  public set authorizeAllGroups(value: boolean | cdktf.IResolvable) {
    this._authorizeAllGroups = value;
  }
  public resetAuthorizeAllGroups() {
    this._authorizeAllGroups = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get authorizeAllGroupsInput() {
    return this._authorizeAllGroups;
  }

  // client_vpn_endpoint_id - computed: false, optional: false, required: true
  private _clientVpnEndpointId?: string; 
  public get clientVpnEndpointId() {
    return this.getStringAttribute('client_vpn_endpoint_id');
  }
  public set clientVpnEndpointId(value: string) {
    this._clientVpnEndpointId = value;
  }
  // Temporarily expose input value. Use with caution.
  public get clientVpnEndpointIdInput() {
    return this._clientVpnEndpointId;
  }

  // description - computed: false, optional: true, required: false
  private _description?: string; 
  public get description() {
    return this.getStringAttribute('description');
  }
  public set description(value: string) {
    this._description = value;
  }
  public resetDescription() {
    this._description = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get descriptionInput() {
    return this._description;
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

  // target_network_cidr - computed: false, optional: false, required: true
  private _targetNetworkCidr?: string; 
  public get targetNetworkCidr() {
    return this.getStringAttribute('target_network_cidr');
  }
  public set targetNetworkCidr(value: string) {
    this._targetNetworkCidr = value;
  }
  // Temporarily expose input value. Use with caution.
  public get targetNetworkCidrInput() {
    return this._targetNetworkCidr;
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      access_group_id: cdktf.stringToTerraform(this._accessGroupId),
      authorize_all_groups: cdktf.booleanToTerraform(this._authorizeAllGroups),
      client_vpn_endpoint_id: cdktf.stringToTerraform(this._clientVpnEndpointId),
      description: cdktf.stringToTerraform(this._description),
      id: cdktf.stringToTerraform(this._id),
      target_network_cidr: cdktf.stringToTerraform(this._targetNetworkCidr),
    };
  }

  protected synthesizeHclAttributes(): { [name: string]: any } {
    const attrs = {
      access_group_id: {
        value: cdktf.stringToHclTerraform(this._accessGroupId),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      authorize_all_groups: {
        value: cdktf.booleanToHclTerraform(this._authorizeAllGroups),
        isBlock: false,
        type: "simple",
        storageClassType: "boolean",
      },
      client_vpn_endpoint_id: {
        value: cdktf.stringToHclTerraform(this._clientVpnEndpointId),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      description: {
        value: cdktf.stringToHclTerraform(this._description),
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
      target_network_cidr: {
        value: cdktf.stringToHclTerraform(this._targetNetworkCidr),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
