// https://registry.terraform.io/providers/aaronfeng/aws/3.29.6/docs/resources/ec2_transit_gateway
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface Ec2TransitGatewayConfig extends cdktf.TerraformMetaArguments {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aaronfeng/aws/3.29.6/docs/resources/ec2_transit_gateway#amazon_side_asn Ec2TransitGateway#amazon_side_asn}
  */
  readonly amazonSideAsn?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aaronfeng/aws/3.29.6/docs/resources/ec2_transit_gateway#auto_accept_shared_attachments Ec2TransitGateway#auto_accept_shared_attachments}
  */
  readonly autoAcceptSharedAttachments?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aaronfeng/aws/3.29.6/docs/resources/ec2_transit_gateway#default_route_table_association Ec2TransitGateway#default_route_table_association}
  */
  readonly defaultRouteTableAssociation?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aaronfeng/aws/3.29.6/docs/resources/ec2_transit_gateway#default_route_table_propagation Ec2TransitGateway#default_route_table_propagation}
  */
  readonly defaultRouteTablePropagation?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aaronfeng/aws/3.29.6/docs/resources/ec2_transit_gateway#description Ec2TransitGateway#description}
  */
  readonly description?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aaronfeng/aws/3.29.6/docs/resources/ec2_transit_gateway#dns_support Ec2TransitGateway#dns_support}
  */
  readonly dnsSupport?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aaronfeng/aws/3.29.6/docs/resources/ec2_transit_gateway#id Ec2TransitGateway#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aaronfeng/aws/3.29.6/docs/resources/ec2_transit_gateway#tags Ec2TransitGateway#tags}
  */
  readonly tags?: { [key: string]: string };
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aaronfeng/aws/3.29.6/docs/resources/ec2_transit_gateway#vpn_ecmp_support Ec2TransitGateway#vpn_ecmp_support}
  */
  readonly vpnEcmpSupport?: string;
}

/**
* Represents a {@link https://registry.terraform.io/providers/aaronfeng/aws/3.29.6/docs/resources/ec2_transit_gateway aws_ec2_transit_gateway}
*/
export class Ec2TransitGateway extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "aws_ec2_transit_gateway";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a Ec2TransitGateway resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the Ec2TransitGateway to import
  * @param importFromId The id of the existing Ec2TransitGateway that should be imported. Refer to the {@link https://registry.terraform.io/providers/aaronfeng/aws/3.29.6/docs/resources/ec2_transit_gateway#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the Ec2TransitGateway to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "aws_ec2_transit_gateway", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/aaronfeng/aws/3.29.6/docs/resources/ec2_transit_gateway aws_ec2_transit_gateway} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options Ec2TransitGatewayConfig = {}
  */
  public constructor(scope: Construct, id: string, config: Ec2TransitGatewayConfig = {}) {
    super(scope, id, {
      terraformResourceType: 'aws_ec2_transit_gateway',
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
    this._amazonSideAsn = config.amazonSideAsn;
    this._autoAcceptSharedAttachments = config.autoAcceptSharedAttachments;
    this._defaultRouteTableAssociation = config.defaultRouteTableAssociation;
    this._defaultRouteTablePropagation = config.defaultRouteTablePropagation;
    this._description = config.description;
    this._dnsSupport = config.dnsSupport;
    this._id = config.id;
    this._tags = config.tags;
    this._vpnEcmpSupport = config.vpnEcmpSupport;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // amazon_side_asn - computed: false, optional: true, required: false
  private _amazonSideAsn?: number; 
  public get amazonSideAsn() {
    return this.getNumberAttribute('amazon_side_asn');
  }
  public set amazonSideAsn(value: number) {
    this._amazonSideAsn = value;
  }
  public resetAmazonSideAsn() {
    this._amazonSideAsn = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get amazonSideAsnInput() {
    return this._amazonSideAsn;
  }

  // arn - computed: true, optional: false, required: false
  public get arn() {
    return this.getStringAttribute('arn');
  }

  // association_default_route_table_id - computed: true, optional: false, required: false
  public get associationDefaultRouteTableId() {
    return this.getStringAttribute('association_default_route_table_id');
  }

  // auto_accept_shared_attachments - computed: false, optional: true, required: false
  private _autoAcceptSharedAttachments?: string; 
  public get autoAcceptSharedAttachments() {
    return this.getStringAttribute('auto_accept_shared_attachments');
  }
  public set autoAcceptSharedAttachments(value: string) {
    this._autoAcceptSharedAttachments = value;
  }
  public resetAutoAcceptSharedAttachments() {
    this._autoAcceptSharedAttachments = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get autoAcceptSharedAttachmentsInput() {
    return this._autoAcceptSharedAttachments;
  }

  // default_route_table_association - computed: false, optional: true, required: false
  private _defaultRouteTableAssociation?: string; 
  public get defaultRouteTableAssociation() {
    return this.getStringAttribute('default_route_table_association');
  }
  public set defaultRouteTableAssociation(value: string) {
    this._defaultRouteTableAssociation = value;
  }
  public resetDefaultRouteTableAssociation() {
    this._defaultRouteTableAssociation = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get defaultRouteTableAssociationInput() {
    return this._defaultRouteTableAssociation;
  }

  // default_route_table_propagation - computed: false, optional: true, required: false
  private _defaultRouteTablePropagation?: string; 
  public get defaultRouteTablePropagation() {
    return this.getStringAttribute('default_route_table_propagation');
  }
  public set defaultRouteTablePropagation(value: string) {
    this._defaultRouteTablePropagation = value;
  }
  public resetDefaultRouteTablePropagation() {
    this._defaultRouteTablePropagation = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get defaultRouteTablePropagationInput() {
    return this._defaultRouteTablePropagation;
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

  // dns_support - computed: false, optional: true, required: false
  private _dnsSupport?: string; 
  public get dnsSupport() {
    return this.getStringAttribute('dns_support');
  }
  public set dnsSupport(value: string) {
    this._dnsSupport = value;
  }
  public resetDnsSupport() {
    this._dnsSupport = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get dnsSupportInput() {
    return this._dnsSupport;
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

  // owner_id - computed: true, optional: false, required: false
  public get ownerId() {
    return this.getStringAttribute('owner_id');
  }

  // propagation_default_route_table_id - computed: true, optional: false, required: false
  public get propagationDefaultRouteTableId() {
    return this.getStringAttribute('propagation_default_route_table_id');
  }

  // tags - computed: false, optional: true, required: false
  private _tags?: { [key: string]: string }; 
  public get tags() {
    return this.getStringMapAttribute('tags');
  }
  public set tags(value: { [key: string]: string }) {
    this._tags = value;
  }
  public resetTags() {
    this._tags = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get tagsInput() {
    return this._tags;
  }

  // vpn_ecmp_support - computed: false, optional: true, required: false
  private _vpnEcmpSupport?: string; 
  public get vpnEcmpSupport() {
    return this.getStringAttribute('vpn_ecmp_support');
  }
  public set vpnEcmpSupport(value: string) {
    this._vpnEcmpSupport = value;
  }
  public resetVpnEcmpSupport() {
    this._vpnEcmpSupport = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get vpnEcmpSupportInput() {
    return this._vpnEcmpSupport;
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      amazon_side_asn: cdktf.numberToTerraform(this._amazonSideAsn),
      auto_accept_shared_attachments: cdktf.stringToTerraform(this._autoAcceptSharedAttachments),
      default_route_table_association: cdktf.stringToTerraform(this._defaultRouteTableAssociation),
      default_route_table_propagation: cdktf.stringToTerraform(this._defaultRouteTablePropagation),
      description: cdktf.stringToTerraform(this._description),
      dns_support: cdktf.stringToTerraform(this._dnsSupport),
      id: cdktf.stringToTerraform(this._id),
      tags: cdktf.hashMapper(cdktf.stringToTerraform)(this._tags),
      vpn_ecmp_support: cdktf.stringToTerraform(this._vpnEcmpSupport),
    };
  }

  protected synthesizeHclAttributes(): { [name: string]: any } {
    const attrs = {
      amazon_side_asn: {
        value: cdktf.numberToHclTerraform(this._amazonSideAsn),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      auto_accept_shared_attachments: {
        value: cdktf.stringToHclTerraform(this._autoAcceptSharedAttachments),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      default_route_table_association: {
        value: cdktf.stringToHclTerraform(this._defaultRouteTableAssociation),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      default_route_table_propagation: {
        value: cdktf.stringToHclTerraform(this._defaultRouteTablePropagation),
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
      dns_support: {
        value: cdktf.stringToHclTerraform(this._dnsSupport),
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
      tags: {
        value: cdktf.hashMapperHcl(cdktf.stringToHclTerraform)(this._tags),
        isBlock: false,
        type: "map",
        storageClassType: "stringMap",
      },
      vpn_ecmp_support: {
        value: cdktf.stringToHclTerraform(this._vpnEcmpSupport),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
