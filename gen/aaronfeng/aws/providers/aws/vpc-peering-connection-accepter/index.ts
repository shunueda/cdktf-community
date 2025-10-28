// https://registry.terraform.io/providers/aaronfeng/aws/3.29.6/docs/resources/vpc_peering_connection_accepter
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface VpcPeeringConnectionAccepterAConfig extends cdktf.TerraformMetaArguments {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aaronfeng/aws/3.29.6/docs/resources/vpc_peering_connection_accepter#auto_accept VpcPeeringConnectionAccepterA#auto_accept}
  */
  readonly autoAccept?: boolean | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aaronfeng/aws/3.29.6/docs/resources/vpc_peering_connection_accepter#id VpcPeeringConnectionAccepterA#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aaronfeng/aws/3.29.6/docs/resources/vpc_peering_connection_accepter#tags VpcPeeringConnectionAccepterA#tags}
  */
  readonly tags?: { [key: string]: string };
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aaronfeng/aws/3.29.6/docs/resources/vpc_peering_connection_accepter#vpc_peering_connection_id VpcPeeringConnectionAccepterA#vpc_peering_connection_id}
  */
  readonly vpcPeeringConnectionId: string;
  /**
  * accepter block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aaronfeng/aws/3.29.6/docs/resources/vpc_peering_connection_accepter#accepter VpcPeeringConnectionAccepterA#accepter}
  */
  readonly accepter?: VpcPeeringConnectionAccepterAccepter;
  /**
  * requester block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aaronfeng/aws/3.29.6/docs/resources/vpc_peering_connection_accepter#requester VpcPeeringConnectionAccepterA#requester}
  */
  readonly requester?: VpcPeeringConnectionAccepterRequester;
}
export interface VpcPeeringConnectionAccepterAccepter {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aaronfeng/aws/3.29.6/docs/resources/vpc_peering_connection_accepter#allow_classic_link_to_remote_vpc VpcPeeringConnectionAccepterA#allow_classic_link_to_remote_vpc}
  */
  readonly allowClassicLinkToRemoteVpc?: boolean | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aaronfeng/aws/3.29.6/docs/resources/vpc_peering_connection_accepter#allow_remote_vpc_dns_resolution VpcPeeringConnectionAccepterA#allow_remote_vpc_dns_resolution}
  */
  readonly allowRemoteVpcDnsResolution?: boolean | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aaronfeng/aws/3.29.6/docs/resources/vpc_peering_connection_accepter#allow_vpc_to_remote_classic_link VpcPeeringConnectionAccepterA#allow_vpc_to_remote_classic_link}
  */
  readonly allowVpcToRemoteClassicLink?: boolean | cdktf.IResolvable;
}

export function vpcPeeringConnectionAccepterAccepterToTerraform(struct?: VpcPeeringConnectionAccepterAccepterOutputReference | VpcPeeringConnectionAccepterAccepter): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    allow_classic_link_to_remote_vpc: cdktf.booleanToTerraform(struct!.allowClassicLinkToRemoteVpc),
    allow_remote_vpc_dns_resolution: cdktf.booleanToTerraform(struct!.allowRemoteVpcDnsResolution),
    allow_vpc_to_remote_classic_link: cdktf.booleanToTerraform(struct!.allowVpcToRemoteClassicLink),
  }
}


export function vpcPeeringConnectionAccepterAccepterToHclTerraform(struct?: VpcPeeringConnectionAccepterAccepterOutputReference | VpcPeeringConnectionAccepterAccepter): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    allow_classic_link_to_remote_vpc: {
      value: cdktf.booleanToHclTerraform(struct!.allowClassicLinkToRemoteVpc),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    allow_remote_vpc_dns_resolution: {
      value: cdktf.booleanToHclTerraform(struct!.allowRemoteVpcDnsResolution),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    allow_vpc_to_remote_classic_link: {
      value: cdktf.booleanToHclTerraform(struct!.allowVpcToRemoteClassicLink),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class VpcPeeringConnectionAccepterAccepterOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): VpcPeeringConnectionAccepterAccepter | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._allowClassicLinkToRemoteVpc !== undefined) {
      hasAnyValues = true;
      internalValueResult.allowClassicLinkToRemoteVpc = this._allowClassicLinkToRemoteVpc;
    }
    if (this._allowRemoteVpcDnsResolution !== undefined) {
      hasAnyValues = true;
      internalValueResult.allowRemoteVpcDnsResolution = this._allowRemoteVpcDnsResolution;
    }
    if (this._allowVpcToRemoteClassicLink !== undefined) {
      hasAnyValues = true;
      internalValueResult.allowVpcToRemoteClassicLink = this._allowVpcToRemoteClassicLink;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: VpcPeeringConnectionAccepterAccepter | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._allowClassicLinkToRemoteVpc = undefined;
      this._allowRemoteVpcDnsResolution = undefined;
      this._allowVpcToRemoteClassicLink = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._allowClassicLinkToRemoteVpc = value.allowClassicLinkToRemoteVpc;
      this._allowRemoteVpcDnsResolution = value.allowRemoteVpcDnsResolution;
      this._allowVpcToRemoteClassicLink = value.allowVpcToRemoteClassicLink;
    }
  }

  // allow_classic_link_to_remote_vpc - computed: false, optional: true, required: false
  private _allowClassicLinkToRemoteVpc?: boolean | cdktf.IResolvable; 
  public get allowClassicLinkToRemoteVpc() {
    return this.getBooleanAttribute('allow_classic_link_to_remote_vpc');
  }
  public set allowClassicLinkToRemoteVpc(value: boolean | cdktf.IResolvable) {
    this._allowClassicLinkToRemoteVpc = value;
  }
  public resetAllowClassicLinkToRemoteVpc() {
    this._allowClassicLinkToRemoteVpc = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get allowClassicLinkToRemoteVpcInput() {
    return this._allowClassicLinkToRemoteVpc;
  }

  // allow_remote_vpc_dns_resolution - computed: false, optional: true, required: false
  private _allowRemoteVpcDnsResolution?: boolean | cdktf.IResolvable; 
  public get allowRemoteVpcDnsResolution() {
    return this.getBooleanAttribute('allow_remote_vpc_dns_resolution');
  }
  public set allowRemoteVpcDnsResolution(value: boolean | cdktf.IResolvable) {
    this._allowRemoteVpcDnsResolution = value;
  }
  public resetAllowRemoteVpcDnsResolution() {
    this._allowRemoteVpcDnsResolution = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get allowRemoteVpcDnsResolutionInput() {
    return this._allowRemoteVpcDnsResolution;
  }

  // allow_vpc_to_remote_classic_link - computed: false, optional: true, required: false
  private _allowVpcToRemoteClassicLink?: boolean | cdktf.IResolvable; 
  public get allowVpcToRemoteClassicLink() {
    return this.getBooleanAttribute('allow_vpc_to_remote_classic_link');
  }
  public set allowVpcToRemoteClassicLink(value: boolean | cdktf.IResolvable) {
    this._allowVpcToRemoteClassicLink = value;
  }
  public resetAllowVpcToRemoteClassicLink() {
    this._allowVpcToRemoteClassicLink = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get allowVpcToRemoteClassicLinkInput() {
    return this._allowVpcToRemoteClassicLink;
  }
}
export interface VpcPeeringConnectionAccepterRequester {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aaronfeng/aws/3.29.6/docs/resources/vpc_peering_connection_accepter#allow_classic_link_to_remote_vpc VpcPeeringConnectionAccepterA#allow_classic_link_to_remote_vpc}
  */
  readonly allowClassicLinkToRemoteVpc?: boolean | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aaronfeng/aws/3.29.6/docs/resources/vpc_peering_connection_accepter#allow_remote_vpc_dns_resolution VpcPeeringConnectionAccepterA#allow_remote_vpc_dns_resolution}
  */
  readonly allowRemoteVpcDnsResolution?: boolean | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aaronfeng/aws/3.29.6/docs/resources/vpc_peering_connection_accepter#allow_vpc_to_remote_classic_link VpcPeeringConnectionAccepterA#allow_vpc_to_remote_classic_link}
  */
  readonly allowVpcToRemoteClassicLink?: boolean | cdktf.IResolvable;
}

export function vpcPeeringConnectionAccepterRequesterToTerraform(struct?: VpcPeeringConnectionAccepterRequesterOutputReference | VpcPeeringConnectionAccepterRequester): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    allow_classic_link_to_remote_vpc: cdktf.booleanToTerraform(struct!.allowClassicLinkToRemoteVpc),
    allow_remote_vpc_dns_resolution: cdktf.booleanToTerraform(struct!.allowRemoteVpcDnsResolution),
    allow_vpc_to_remote_classic_link: cdktf.booleanToTerraform(struct!.allowVpcToRemoteClassicLink),
  }
}


export function vpcPeeringConnectionAccepterRequesterToHclTerraform(struct?: VpcPeeringConnectionAccepterRequesterOutputReference | VpcPeeringConnectionAccepterRequester): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    allow_classic_link_to_remote_vpc: {
      value: cdktf.booleanToHclTerraform(struct!.allowClassicLinkToRemoteVpc),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    allow_remote_vpc_dns_resolution: {
      value: cdktf.booleanToHclTerraform(struct!.allowRemoteVpcDnsResolution),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    allow_vpc_to_remote_classic_link: {
      value: cdktf.booleanToHclTerraform(struct!.allowVpcToRemoteClassicLink),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class VpcPeeringConnectionAccepterRequesterOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): VpcPeeringConnectionAccepterRequester | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._allowClassicLinkToRemoteVpc !== undefined) {
      hasAnyValues = true;
      internalValueResult.allowClassicLinkToRemoteVpc = this._allowClassicLinkToRemoteVpc;
    }
    if (this._allowRemoteVpcDnsResolution !== undefined) {
      hasAnyValues = true;
      internalValueResult.allowRemoteVpcDnsResolution = this._allowRemoteVpcDnsResolution;
    }
    if (this._allowVpcToRemoteClassicLink !== undefined) {
      hasAnyValues = true;
      internalValueResult.allowVpcToRemoteClassicLink = this._allowVpcToRemoteClassicLink;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: VpcPeeringConnectionAccepterRequester | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._allowClassicLinkToRemoteVpc = undefined;
      this._allowRemoteVpcDnsResolution = undefined;
      this._allowVpcToRemoteClassicLink = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._allowClassicLinkToRemoteVpc = value.allowClassicLinkToRemoteVpc;
      this._allowRemoteVpcDnsResolution = value.allowRemoteVpcDnsResolution;
      this._allowVpcToRemoteClassicLink = value.allowVpcToRemoteClassicLink;
    }
  }

  // allow_classic_link_to_remote_vpc - computed: false, optional: true, required: false
  private _allowClassicLinkToRemoteVpc?: boolean | cdktf.IResolvable; 
  public get allowClassicLinkToRemoteVpc() {
    return this.getBooleanAttribute('allow_classic_link_to_remote_vpc');
  }
  public set allowClassicLinkToRemoteVpc(value: boolean | cdktf.IResolvable) {
    this._allowClassicLinkToRemoteVpc = value;
  }
  public resetAllowClassicLinkToRemoteVpc() {
    this._allowClassicLinkToRemoteVpc = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get allowClassicLinkToRemoteVpcInput() {
    return this._allowClassicLinkToRemoteVpc;
  }

  // allow_remote_vpc_dns_resolution - computed: false, optional: true, required: false
  private _allowRemoteVpcDnsResolution?: boolean | cdktf.IResolvable; 
  public get allowRemoteVpcDnsResolution() {
    return this.getBooleanAttribute('allow_remote_vpc_dns_resolution');
  }
  public set allowRemoteVpcDnsResolution(value: boolean | cdktf.IResolvable) {
    this._allowRemoteVpcDnsResolution = value;
  }
  public resetAllowRemoteVpcDnsResolution() {
    this._allowRemoteVpcDnsResolution = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get allowRemoteVpcDnsResolutionInput() {
    return this._allowRemoteVpcDnsResolution;
  }

  // allow_vpc_to_remote_classic_link - computed: false, optional: true, required: false
  private _allowVpcToRemoteClassicLink?: boolean | cdktf.IResolvable; 
  public get allowVpcToRemoteClassicLink() {
    return this.getBooleanAttribute('allow_vpc_to_remote_classic_link');
  }
  public set allowVpcToRemoteClassicLink(value: boolean | cdktf.IResolvable) {
    this._allowVpcToRemoteClassicLink = value;
  }
  public resetAllowVpcToRemoteClassicLink() {
    this._allowVpcToRemoteClassicLink = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get allowVpcToRemoteClassicLinkInput() {
    return this._allowVpcToRemoteClassicLink;
  }
}

/**
* Represents a {@link https://registry.terraform.io/providers/aaronfeng/aws/3.29.6/docs/resources/vpc_peering_connection_accepter aws_vpc_peering_connection_accepter}
*/
export class VpcPeeringConnectionAccepterA extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "aws_vpc_peering_connection_accepter";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a VpcPeeringConnectionAccepterA resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the VpcPeeringConnectionAccepterA to import
  * @param importFromId The id of the existing VpcPeeringConnectionAccepterA that should be imported. Refer to the {@link https://registry.terraform.io/providers/aaronfeng/aws/3.29.6/docs/resources/vpc_peering_connection_accepter#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the VpcPeeringConnectionAccepterA to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "aws_vpc_peering_connection_accepter", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/aaronfeng/aws/3.29.6/docs/resources/vpc_peering_connection_accepter aws_vpc_peering_connection_accepter} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options VpcPeeringConnectionAccepterAConfig
  */
  public constructor(scope: Construct, id: string, config: VpcPeeringConnectionAccepterAConfig) {
    super(scope, id, {
      terraformResourceType: 'aws_vpc_peering_connection_accepter',
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
    this._autoAccept = config.autoAccept;
    this._id = config.id;
    this._tags = config.tags;
    this._vpcPeeringConnectionId = config.vpcPeeringConnectionId;
    this._accepter.internalValue = config.accepter;
    this._requester.internalValue = config.requester;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // accept_status - computed: true, optional: false, required: false
  public get acceptStatus() {
    return this.getStringAttribute('accept_status');
  }

  // auto_accept - computed: false, optional: true, required: false
  private _autoAccept?: boolean | cdktf.IResolvable; 
  public get autoAccept() {
    return this.getBooleanAttribute('auto_accept');
  }
  public set autoAccept(value: boolean | cdktf.IResolvable) {
    this._autoAccept = value;
  }
  public resetAutoAccept() {
    this._autoAccept = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get autoAcceptInput() {
    return this._autoAccept;
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

  // peer_owner_id - computed: true, optional: false, required: false
  public get peerOwnerId() {
    return this.getStringAttribute('peer_owner_id');
  }

  // peer_region - computed: true, optional: false, required: false
  public get peerRegion() {
    return this.getStringAttribute('peer_region');
  }

  // peer_vpc_id - computed: true, optional: false, required: false
  public get peerVpcId() {
    return this.getStringAttribute('peer_vpc_id');
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

  // vpc_id - computed: true, optional: false, required: false
  public get vpcId() {
    return this.getStringAttribute('vpc_id');
  }

  // vpc_peering_connection_id - computed: false, optional: false, required: true
  private _vpcPeeringConnectionId?: string; 
  public get vpcPeeringConnectionId() {
    return this.getStringAttribute('vpc_peering_connection_id');
  }
  public set vpcPeeringConnectionId(value: string) {
    this._vpcPeeringConnectionId = value;
  }
  // Temporarily expose input value. Use with caution.
  public get vpcPeeringConnectionIdInput() {
    return this._vpcPeeringConnectionId;
  }

  // accepter - computed: false, optional: true, required: false
  private _accepter = new VpcPeeringConnectionAccepterAccepterOutputReference(this, "accepter");
  public get accepter() {
    return this._accepter;
  }
  public putAccepter(value: VpcPeeringConnectionAccepterAccepter) {
    this._accepter.internalValue = value;
  }
  public resetAccepter() {
    this._accepter.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get accepterInput() {
    return this._accepter.internalValue;
  }

  // requester - computed: false, optional: true, required: false
  private _requester = new VpcPeeringConnectionAccepterRequesterOutputReference(this, "requester");
  public get requester() {
    return this._requester;
  }
  public putRequester(value: VpcPeeringConnectionAccepterRequester) {
    this._requester.internalValue = value;
  }
  public resetRequester() {
    this._requester.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get requesterInput() {
    return this._requester.internalValue;
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      auto_accept: cdktf.booleanToTerraform(this._autoAccept),
      id: cdktf.stringToTerraform(this._id),
      tags: cdktf.hashMapper(cdktf.stringToTerraform)(this._tags),
      vpc_peering_connection_id: cdktf.stringToTerraform(this._vpcPeeringConnectionId),
      accepter: vpcPeeringConnectionAccepterAccepterToTerraform(this._accepter.internalValue),
      requester: vpcPeeringConnectionAccepterRequesterToTerraform(this._requester.internalValue),
    };
  }

  protected synthesizeHclAttributes(): { [name: string]: any } {
    const attrs = {
      auto_accept: {
        value: cdktf.booleanToHclTerraform(this._autoAccept),
        isBlock: false,
        type: "simple",
        storageClassType: "boolean",
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
      vpc_peering_connection_id: {
        value: cdktf.stringToHclTerraform(this._vpcPeeringConnectionId),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      accepter: {
        value: vpcPeeringConnectionAccepterAccepterToHclTerraform(this._accepter.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "VpcPeeringConnectionAccepterAccepterList",
      },
      requester: {
        value: vpcPeeringConnectionAccepterRequesterToHclTerraform(this._requester.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "VpcPeeringConnectionAccepterRequesterList",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
